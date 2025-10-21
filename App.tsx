import { useState } from 'react';
import Landing from './components/landing';
import Menu from './components/menu';
import Events from './components/events';
import Membership from './components/membership';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'events' | 'membership'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Landing onNavigate={setCurrentPage} />;
      case 'menu':
        return <Menu onNavigate={setCurrentPage} />;
      case 'events':
        return <Events onNavigate={setCurrentPage} />;
      case 'membership':
        return <Membership onNavigate={setCurrentPage} />;
      default:
        return <Landing onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {renderPage()}
    </div>
  );
}
