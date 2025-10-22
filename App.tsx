import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { MenuPage } from './components/MenuPage';
import { PlaceholderPage } from './components/PlaceholderPage';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'menu' | 'events' | 'membership';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        {currentPage === 'home' && (
          <LandingPage onNavigate={handleNavigate} />
        )}
        
        {currentPage === 'menu' && <MenuPage />}
        
        {currentPage === 'events' && (
          <PlaceholderPage
            title="Events Coming Soon"
            description="We're planning exciting events for our community! Check back soon for upcoming dog meetups, coffee tastings, and special gatherings."
          />
        )}
        
        {currentPage === 'membership' && (
          <PlaceholderPage
            title="Membership Program"
            description="Join our exclusive membership program for special perks, discounts, and priority access to events. Details coming soon!"
          />
        )}
      </main>
      
      <Toaster />
    </div>
  );
}
