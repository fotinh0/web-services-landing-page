import { Check, Clock } from 'lucide-react';

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  timeline: string;
  badge?: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  timeline,
  badge,
  icon,
  highlighted = false
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        highlighted
          ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/50 ring-4 ring-blue-400/50'
          : 'bg-white shadow-xl hover:shadow-2xl'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          {badge}
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${highlighted ? 'bg-white/20' : 'bg-blue-50'}`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-bold ${highlighted ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
      </div>

      <div className="mb-4">
        <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-slate-900'}`}>
          {price}
        </span>
      </div>

      <p className={`mb-6 text-lg ${highlighted ? 'text-blue-50' : 'text-slate-600'}`}>
        {description}
      </p>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-0.5 p-1 rounded-full ${highlighted ? 'bg-white/20' : 'bg-blue-50'}`}>
              <Check className={`w-4 h-4 ${highlighted ? 'text-white' : 'text-blue-600'}`} />
            </div>
            <span className={highlighted ? 'text-blue-50' : 'text-slate-700'}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className={`flex items-center gap-2 py-4 border-t ${
        highlighted ? 'border-white/20' : 'border-slate-200'
      }`}>
        <Clock className={`w-5 h-5 ${highlighted ? 'text-blue-100' : 'text-slate-500'}`} />
        <span className={`font-semibold ${highlighted ? 'text-white' : 'text-slate-700'}`}>
          {timeline}
        </span>
      </div>

      <a
        href="#contact"
        className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-blue-500/30'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
