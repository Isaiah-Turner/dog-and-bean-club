import { Coffee } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: 'home' | 'menu' | 'events' | 'membership';
  onNavigate: (page: 'home' | 'menu' | 'events' | 'membership') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
            aria-label="Dog and Bean Club Home"
          >
            <Coffee className="w-6 h-6" />
            <span className="font-semibold">Dog & Bean Club</span>
          </button>
          
          <div className="flex gap-2">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'menu' ? 'default' : 'ghost'}
              onClick={() => onNavigate('menu')}
            >
              Menu
            </Button>
            <Button
              variant={currentPage === 'events' ? 'default' : 'ghost'}
              onClick={() => onNavigate('events')}
            >
              Events
            </Button>
            <Button
              variant={currentPage === 'membership' ? 'default' : 'ghost'}
              onClick={() => onNavigate('membership')}
            >
              Membership
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
