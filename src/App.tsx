import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import { BackgroundGrid } from './components/BackgroundGrid';
import { IntroOverlay } from './components/IntroOverlay';
import { Header } from './components/Header';
import { HeaderMenu } from './components/HeaderMenu';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorksPage } from './pages/WorksPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top upon navigating to a new route
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('rivisha-theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.dataset.theme = 'light';
    } else {
      setTheme('dark');
      document.documentElement.dataset.theme = 'dark';
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-300">
      <ScrollToTop />
      {/* Background 12-Column Grid */}
      <BackgroundGrid />

      {/* Intro Overlay Sequence */}
      <IntroOverlay />

      {/* Fixed Header */}
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Fullscreen Mobile/Desktop Menu */}
      <HeaderMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="pt-14 md:pt-16 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:slug" element={<WorkDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
