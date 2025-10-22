import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { MenuPage } from './components/MenuPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/events" element={<ComingSoon title="Events" />} />
            <Route path="/membership" element={<ComingSoon title="Membership" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="mb-4">{title}</h1>
      <p className="text-muted-foreground">Coming soon! Check back later.</p>
    </div>
  );
}
