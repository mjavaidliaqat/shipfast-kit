export const siteConfig = {
  name: "ShipFast Kit",
  description: "Launch your Next.js SaaS in hours, not weeks.",
  url: "https://shipfast-kit.vercel.app",
  pricing: [
    {
      name: "Starter",
      price: "$19",
      features: ["Unlimited Access", "Basic Analytics", "Community Support"],
      priceId: "price_starter_mock",
    },
    {
      name: "Pro",
      price: "$49",
      popular: true,
      features: ["Everything in Starter", "Priority Support", "Custom Domain", "Advanced Metrics"],
      priceId: "price_pro_mock",
    },
  ],
};
