import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import { FeaturesPage, PricingPage, SecurityPage, AboutPage, ContactPage } from './components/InfoPages';
import PilotForm from './components/PilotForm';

// Wrapper for Pilot Form page with layout context
const PilotPage = () => (
  <div className="py-20 bg-slate-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <PilotForm />
    </div>
  </div>
);

// Helper for scroll to top on route change (Simulating ScrollRestoration behavior manually if needed, but Router handles it mostly)
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pilot" element={<PilotPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback for 404 can go here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;