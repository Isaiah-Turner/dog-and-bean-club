import { Clock, MapPin, Calendar, Users } from 'lucide-react';
import Navigation from './navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingProps {
  onNavigate: (page: 'home' | 'menu' | 'events' | 'membership') => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1707831696610-77fe40ea3cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxkb2clMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDc4NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Cozy interior with dogs'
    },
    {
      url: 'https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMDgxMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Café exterior storefront'
    },
    {
      url: 'https://images.unsplash.com/photo-1565128536311-05b6907deafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBkb2dzJTIwY29mZmVlfGVufDF8fHx8MTc2MTA4MTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Members enjoying coffee with their dogs'
    },
    {
      url: 'https://images.unsplash.com/photo-1744877478622-a78c7a3336f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXIlMjBlc3ByZXNzb3xlbnwxfHx8fDE3NjEwODEwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Professional coffee bar with espresso machine'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} currentPage="home" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594997359546-a7eef7006343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk0ODB8MHwxfHNlYXJjaHwxfHxkb2clMjBmcmllbmRseSUyMGNhZmV8ZW58MXx8fHwxNzYxMDgxMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dog friendly café atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">Dog & Bean Club</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95">
            Where coffee lovers and dog lovers unite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('membership')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Become a Member
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="bg-white hover:bg-neutral-100 text-amber-900 px-8 py-3 rounded-lg transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-neutral-900">Welcome to Our Community</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Dog & Bean Club is more than just a café – it's a vibrant community space where dog enthusiasts 
            gather to enjoy exceptional specialty coffee, share stories, and connect with fellow pet lovers. 
            Our mission is to create an inclusive, welcoming environment where both humans and their furry 
            friends can relax, socialize, and feel right at home.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            As a members-only establishment, we maintain a safe, clean, and comfortable atmosphere for all. 
            Whether you're here to work remotely, attend one of our events, or simply enjoy a perfectly 
            crafted latte with your best friend by your side, you'll find your place at Dog & Bean Club.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-neutral-900">Our Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg">
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

      {/* Hours & Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-neutral-900">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <Clock className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl mb-4 text-neutral-900">Hours of Operation</h3>
              <div className="space-y-2 text-neutral-700">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl mb-4 text-neutral-900">Location</h3>
              <div className="space-y-2 text-neutral-700">
                <p>123 Pawsome Street</p>
                <p>Bark City, BC 12345</p>
                <p className="mt-4">Free parking available</p>
              </div>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <Users className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl mb-4 text-neutral-900">Members Only</h3>
              <div className="space-y-2 text-neutral-700">
                <p>Join our community of dog lovers</p>
                <p>Exclusive access to events</p>
                <button
                  onClick={() => onNavigate('membership')}
                  className="mt-4 text-amber-700 hover:text-amber-800 underline"
                >
                  Learn about membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events CTA Section */}
      <section className="py-20 px-4 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-6">Upcoming Events</h2>
          <p className="text-xl mb-8 text-white/95">
            From puppy training workshops to coffee tasting sessions, there's always something 
            happening at Dog & Bean Club.
          </p>
          <button
            onClick={() => onNavigate('events')}
            className="bg-white hover:bg-neutral-100 text-amber-900 px-8 py-3 rounded-lg transition-colors"
          >
            View Events Calendar
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2025 Dog & Bean Club. All rights reserved.
          </p>
          <p className="text-neutral-500 mt-2">
            A community space for dog lovers and coffee enthusiasts.
          </p>
        </div>
      </footer>
    </div>
  );
}
