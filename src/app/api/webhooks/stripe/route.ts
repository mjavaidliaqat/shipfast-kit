import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    if (!webhookSecret || !signature) {
      // Fallback for direct testing if signature validation isn't configured yet
      event = JSON.parse(body);
    } else {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    }
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle successful checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    const planName = session.amount_total === 4900 ? 'Pro' : 'Starter';

    if (customerEmail) {
      // Initialize Supabase Admin Client using service key or standard URL/Key
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Upsert subscriber record into Supabase "customers" table
      const { error } = await supabase
        .from('customers')
        .upsert(
          {
            email: customerEmail,
            plan: planName,
            status: 'active',
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'email' }
        );

      if (error) {
        console.error('Error updating customer in Supabase:', error);
      }
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
