import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield, Activity, Users, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'How It Works', path: '/#how-it-works' },
  { label: 'Features', path: '/features' },
  { label: 'Use Cases', path: '/#use-cases' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Pilot Program', path: '/pilot', isButton: true },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      if (location.pathname === '/') {
        scrollToSection(id);
      } else {
        // Allow navigation to handle the route change first
        setTimeout(() => scrollToSection(id), 100);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-primary-600 p-1.5 rounded-lg">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">AI CONNECT</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isButton ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-primary-500/20"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    item.isButton
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-6 w-6 text-primary-400" />
                <span className="text-xl font-bold text-white">AI CONNECT</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Two-way AI for Public Voices & Leaders.
                Empowering digital democracy through filtered, verified communication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/features" className="hover:text-primary-400">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary-400">Pricing</Link></li>
                <li><Link to="/security" className="hover:text-primary-400">Security & Compliance</Link></li>
                <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="hover:text-primary-400">Blog & Insights</Link></li>
                <li><a href="#" className="hover:text-primary-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
                <li><Link to="/contact" className="hover:text-primary-400">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-400">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary-400">GDPR / DPDP Info</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} AI CONNECT. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="flex items-center"><Globe className="h-4 w-4 mr-1" /> English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;