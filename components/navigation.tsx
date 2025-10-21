import { Coffee, Menu as MenuIcon } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: 'home' | 'menu' | 'events' | 'membership') => void;
  currentPage?: string;
}

export default function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Coffee className="w-8 h-8 text-amber-700" />
            <span className="text-amber-900">Dog & Bean Club</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-amber-700' : 'text-neutral-600 hover:text-amber-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className={`transition-colors ${
                currentPage === 'menu' ? 'text-amber-700' : 'text-neutral-600 hover:text-amber-700'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => onNavigate('events')}
              className={`transition-colors ${
                currentPage === 'events' ? 'text-amber-700' : 'text-neutral-600 hover:text-amber-700'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => onNavigate('membership')}
              className={`transition-colors ${
                currentPage === 'membership' ? 'text-amber-700' : 'text-neutral-600 hover:text-amber-700'
              }`}
            >
              Membership
            </button>
          </div>

          <div className="md:hidden">
            <MenuIcon className="w-6 h-6 text-neutral-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}
