import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1707831696610-77fe40ea3cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxkb2clMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDc4NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cozy dog cafe interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1759643161610-a654edae1016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZXh0ZXJpb3IlMjBicmlja3xlbnwxfHx8fDE3NjEwNzg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cafe exterior',
    },
    {
      url: 'https://images.unsplash.com/photo-1553657495-276b62096098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZG9nc3xlbnwxfHx8fDE3NjEwNzg0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Happy dogs at the cafe',
    },
    {
      url: 'https://images.unsplash.com/photo-1586864030218-6885c4d16684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwY291bnRlcnxlbnwxfHx8fDE3NjEwNzg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Coffee bar counter',
    },
    {
      url: 'https://images.unsplash.com/photo-1712746438669-cc8d7193b08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhZmV8ZW58MXx8fHwxNzYxMDc4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Happy dog enjoying the cafe',
    },
    {
      url: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NjEwNzg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Specialty coffee latte',
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 7:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553657495-276b62096098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZG9nc3xlbnwxfHx8fDE3NjEwNzg0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dog & Bean Club hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-5xl md:text-7xl mb-6">
              Dog & Bean Club
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8 opacity-90">
              Where Coffee Lovers and Dog Lovers Unite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Learn More
              </a>
              <a
                href="/menu"
                className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-3 rounded-lg transition-colors"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-amber-900 text-4xl mb-6">Welcome to Our Club</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Dog & Bean Club is more than just a café—it's a vibrant community space where dog lovers 
            gather to enjoy specialty coffee, connect with fellow enthusiasts, and participate in exciting events. 
            Our members-only club offers a unique atmosphere where your furry friends are not just welcome, but celebrated.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From expertly crafted lattes to dog-friendly treats, we've created the perfect environment for 
            you and your companion to relax, socialize, and be part of something special. Join us in 
            building a community that celebrates the joy that dogs and great coffee bring to our lives.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-amber-900 text-4xl text-center mb-12">Our Space</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-amber-700" />
                <h2 className="text-amber-900 text-3xl">Hours of Operation</h2>
              </div>
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="text-amber-800">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-amber-900 text-3xl mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">123 Bark Street</p>
                    <p className="text-gray-700">Dogtown, DT 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0" />
                  <p className="text-gray-700">(555) DOG-BEAN</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0" />
                  <p className="text-gray-700">hello@dogandbeanclub.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">Dog & Bean Club</p>
          <p className="text-amber-200 text-sm">
            A members-only community space for dog lovers and coffee enthusiasts
          </p>
          <p className="text-amber-300 text-sm mt-4">© 2025 Dog & Bean Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
