export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} FC Web Development Services. <br />{" "}
            Built with care for local businesses.
          </p>
          <div className="flex gap-6">
            <a
              href="#pricing"
              className="text-sm hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
