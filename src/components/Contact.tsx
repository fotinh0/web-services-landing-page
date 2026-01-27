import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300">
            Let's bring your business online with a beautiful, professional
            website.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <h5 className="mb-2">foti.coding@gmail.com</h5>
            <p className="text-slate-400 text-sm">
              Get a response within 24 hours
            </p>
          </div>

          {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-slate-400 text-sm">Available Mon-Fri, 9am-6pm</p>
          </div> */}

          {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-4">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-slate-400 text-sm">
              Schedule a free consultation
            </p>
          </div> */}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Start Your Project Today</h3>
          <p className="text-blue-50 mb-8 text-lg">
            Quick turnaround, professional results, and pricing that makes
            sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:foti.coding@gmail.com"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Send an Email
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Pricing Again
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
