import { ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Bloom Florist Studio',
    category: 'Local Shop Website',
    description: 'Beautiful e-commerce site for a local florist with product catalog, seasonal collections, and integrated payments.',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Shopify Setup', 'Product Gallery', 'Online Orders', 'Mobile Optimized'],
    link: '#',
  },
  {
    id: 2,
    title: 'Creative Studio Portfolio',
    category: 'Professional Website',
    description: 'Stunning portfolio website for a graphic designer showcasing their work and client testimonials.',
    image: 'https://images.pexels.com/photos/3823517/pexels-photo-3823517.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Portfolio Gallery', 'Client Testimonials', 'Contact Form', 'SEO Optimized'],
    link: '#',
  },
  {
    id: 3,
    title: 'Local Coffee Roastery',
    category: 'Starter Website',
    description: 'Modern, clean website for a specialty coffee shop featuring their story, menu, and location.',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['4 Pages', 'Contact Form', 'Map Integration', 'Social Links'],
    link: '#',
  },
  {
    id: 4,
    title: 'Boutique Fashion Store',
    category: 'Local Shop Website',
    description: 'Elegant shopping site for a fashion boutique with product filters, wishlist, and seasonal promotions.',
    image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Shopify Store', 'Product Filters', 'Promotions', 'Cart Integration'],
    link: '#',
  },
  {
    id: 5,
    title: 'Wellness Coaching',
    category: 'Professional Website',
    description: 'Professional website for a wellness coach featuring services, testimonials, and booking integration.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Service Pages', 'Testimonials', 'Contact Form', 'Professional Design'],
    link: '#',
  },
  {
    id: 6,
    title: 'Local Bakery',
    category: 'Starter Website',
    description: 'Warm, inviting website for a local bakery with menu, about section, and contact information.',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Menu Display', 'About Section', 'Contact Info', 'Responsive Design'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-600 mb-4">
            <Award className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the beautiful websites we've created for small businesses and creatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-slate-200 h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <p className="text-blue-600 text-sm font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
