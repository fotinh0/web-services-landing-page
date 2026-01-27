import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Owner, Bloom Florist',
    content: 'The team transformed my vision into a beautiful website that actually drives sales. My online orders increased by 40% in the first month!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Graphic Designer',
    content: 'My portfolio site is exactly what I needed. Clean, professional, and it has gotten me more inquiries from potential clients. Highly recommend!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Wellness Coach',
    content: 'Fast, professional, and affordable. The design looks premium but didn\'t cost the earth. My clients are impressed with how modern it feels.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'James Thompson',
    title: 'Coffee Shop Manager',
    content: 'We went from no online presence to a fully functional site in under 2 weeks. The team was responsive and made the whole process seamless.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Lisa Park',
    title: 'Boutique Owner',
    content: 'Setting up the Shopify store was smooth and my customers love the checkout experience. Best investment I made for my business.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'David Kim',
    title: 'Bakery Owner',
    content: 'Professional work at an honest price. They understood what I needed and delivered it perfectly. Will definitely use them again.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2758857/pexels-photo-2758857.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-600 mb-4">
            <Star className="w-4 h-4 fill-blue-600" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by Our Clients
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from real businesses we've helped grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
