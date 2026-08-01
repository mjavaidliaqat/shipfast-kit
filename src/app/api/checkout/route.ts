import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey || stripeKey.includes('your_stripe_secret_key')) {
    return NextResponse.json(
      { error: 'Stripe is in Demo Mode. Add your STRIPE_SECRET_KEY in .env.local to test real checkout.' },
      { status: 400 }
    );
  }

  try {
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });
    const { plan } = await req.json();

    const isPro = plan === 'pro';
    const amount = isPro ? 4900 : 1900; // in cents
    const name = isPro ? 'Pro Plan' : 'Starter Plan';

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
            },
            unit_amount: amount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/dashboard/billing?success=true`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
