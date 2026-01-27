import { Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300">
            <Sparkles className="w-4 h-4" />
            <span>Professional Web Development Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Beautiful Websites for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Local Businesses
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Clean, modern websites built fast with clear pricing.
            Perfect for small businesses, creatives, and local shops.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#pricing"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View Pricing
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-12 text-slate-400">
          <div className="text-center">
            <Code2 className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="text-sm">Modern Tech</p>
          </div>
          <div className="h-12 w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">7-21</div>
            <p className="text-sm">Days Delivery</p>
          </div>
          <div className="h-12 w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">$800+</div>
            <p className="text-sm">Starting Price</p>
          </div>
        </div>
      </div>
    </section>
  );
}
