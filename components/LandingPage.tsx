import { Link } from 'react-router-dom';
import { Clock, MapPin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1707831696610-77fe40ea3cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxkb2clMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTA5MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Cozy cafe interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1735132619395-a8f675a2dc66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBiYXJpc3RhfGVufDF8fHx8MTc2MTEwOTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Barista preparing specialty coffee',
    },
    {
      src: 'https://images.unsplash.com/photo-1758762623775-ffcadce9fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY2FmZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTEwOTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Cafe exterior view',
    },
    {
      src: 'https://images.unsplash.com/photo-1554177339-90ac3314eab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxkb2dzJTIwcGxheWluZyUyMGNhZmV8ZW58MXx8fHwxNzYxMTA5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Dogs enjoying the space',
    },
    {
      src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjExMDkxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Latte art coffee',
    },
    {
      src: 'https://images.unsplash.com/photo-1650100458608-824a54559caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MTEwOTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Fresh coffee beans',
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 8:00 PM' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1707831696610-77fe40ea3cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxkb2clMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTA5MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="mb-6">Dog & Bean Club</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Where coffee lovers and dog enthusiasts come together
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-6">Welcome to Our Community</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Dog & Bean Club is more than just a café – it's a vibrant community space where dog lovers
            gather to enjoy specialty coffee, connect with like-minded individuals, and create lasting
            memories with their furry friends.
          </p>
          <p className="text-lg text-muted-foreground">
            Our mission is to provide a welcoming, inclusive environment where both humans and their
            canine companions can relax, socialize, and enjoy the finest coffee and treats. We believe
            that great coffee and great company make life better.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Our Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
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

      {/* Hours and Location Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-6 w-6" />
                  <h3>Hours of Operation</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span>{schedule.day}</span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="h-6 w-6" />
                  <h3>Location</h3>
                </div>
                <address className="not-italic space-y-4">
                  <p>
                    123 Bark Street<br />
                    Puppyville, CA 90210
                  </p>
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-5 w-5" />
                      <span>info@dogandbeanclub.com</span>
                    </div>
                    <p className="text-muted-foreground">
                      Free parking available in the rear lot
                    </p>
                  </div>
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="mb-4">Ready to Join?</h2>
          <p className="text-lg mb-8 opacity-90">
            Become a member today and enjoy exclusive benefits, special events, and unlimited tail wags!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/membership">Learn About Membership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
