import { Globe, Star, ShoppingBag } from 'lucide-react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    title: 'Starter Website',
    price: '$800',
    description: 'Simple, professional online presence',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    features: [
      { text: 'Wix Studio setup' },
      { text: 'Up to 4 pages' },
      { text: 'Mobile-optimized design' },
      { text: 'Contact / inquiry form' },
      { text: 'Basic SEO' },
      { text: 'Social links' },
      { text: '1 revision' },
    ],
    timeline: '7–10 days',
  },
  {
    title: 'Professional Website',
    price: '$1,200',
    description: 'For creatives showcasing their work',
    icon: <Star className="w-6 h-6 text-white" />,
    features: [
      { text: 'Up to 8 pages' },
      { text: 'Portfolio / gallery' },
      { text: 'Testimonials' },
      { text: 'Enhanced design & styling' },
      { text: 'Conversion-focused layout' },
      { text: '1 revision' },
    ],
    timeline: '10–14 days',
    badge: 'Most Popular',
    highlighted: true,
  },
  {
    title: 'Local Shop Website',
    price: '$1,750',
    description: 'For florists, boutiques & local shops',
    icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
    features: [
      { text: 'Shopify setup' },
      { text: 'Premium store template' },
      { text: 'Up to 15 products' },
      { text: 'Payments + delivery / pickup' },
      { text: 'Order confirmation emails' },
      { text: 'Mobile-optimized checkout' },
      { text: '2 revisions' },
    ],
    timeline: '14–21 days',
    subtitle: 'Built on Shopify',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clear, Simple Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📌</span>
            Important Notes
          </h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Hosting, domain & platform fees are paid by the client</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Client provides all content (text, images, branding, product details)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Scope is limited to the selected package</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Timeline starts once content is received</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
