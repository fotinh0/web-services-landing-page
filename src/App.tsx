import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import Testimonials from './components/Testimonials';
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <Testimonials /> */}
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
