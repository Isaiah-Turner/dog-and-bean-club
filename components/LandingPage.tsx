import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';

interface LandingPageProps {
  onNavigate: (page: 'menu' | 'events' | 'membership') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 6:00 PM' },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTE0MjMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cozy interior of Dog & Bean Club',
    },
    {
      src: 'https://images.unsplash.com/photo-1709380146579-e46f2736650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wJTIwZXh0ZXJpb3IlMjBzdG9yZWZyb250fGVufDF8fHx8MTc2MTE0MjMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Dog & Bean Club exterior storefront',
    },
    {
      src: 'https://images.unsplash.com/photo-1553657495-276b62096098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxkb2dzJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjExNDIzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Dogs enjoying the space at Dog & Bean Club',
    },
    {
      src: 'https://images.unsplash.com/photo-1721277016120-1e2028c38c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBiYXJpc3RhJTIwbWFraW5nJTIwZHJpbmt8ZW58MXx8fHwxNzYxMTQyMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Barista preparing coffee at our coffee bar',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTE0MjMyNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dog & Bean Club interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4 text-white">Dog & Bean Club</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Where coffee lovers and dog lovers unite. Experience the perfect blend of artisan coffee and canine companionship.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Menu
            </button>
            <button
              onClick={() => onNavigate('membership')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Become a Member
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-8">Welcome to Dog & Bean Club</h2>
          <div className="space-y-4">
            <p>
              At Dog & Bean Club, we've created a unique space where the warmth of a great cup of coffee meets the joy of spending time with furry friends. Whether you're a dog owner looking for a welcoming spot to enjoy your morning brew, or someone who simply loves being around dogs, our club is your perfect destination.
            </p>
            <p>
              Our mission is simple: to build a community that celebrates the simple pleasures of life—quality coffee, good company, and the unconditional love of dogs. We source our beans from sustainable farms, ensure every cup is crafted with care, and maintain a safe, clean environment where both humans and dogs can relax and socialize.
            </p>
            <p>
              Join us for a cup of coffee, stay for the wagging tails and new friendships. We can't wait to welcome you to the pack!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Our Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-6 h-6" />
                  <h3>Hours of Operation</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                      <span>{schedule.day}</span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p>123 Coffee Street</p>
                      <p>Barksville, CA 94102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <p>hello@dogandbeanclub.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-white">Ready to Join the Pack?</h2>
          <p className="mb-8 text-gray-300">
            Explore our menu, check out upcoming events, or learn about membership benefits.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Menu
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              See Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
