
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, MARIGOLD_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-4' : 'bg-transparent py-8 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center group">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-[0.4em] uppercase leading-none transition-transform group-hover:scale-105 duration-500">
            <span className={isScrolled ? 'text-marigold-700' : 'text-marigold-400'}>Marigold</span>
          </div>
          <div className={`text-[8px] md:text-[10px] tracking-[0.6em] uppercase mt-1 font-bold transition-all ${isScrolled ? 'text-luxury-dark opacity-100' : 'text-white opacity-60'}`}>
            Hotels
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-marigold-600 group ${isActive ? 'text-marigold-600' : (isScrolled ? 'text-luxury-dark' : 'text-white')}`
              }
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-marigold-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
          <Link to="/rooms" className="relative overflow-hidden bg-marigold-600 text-white px-8 py-3 group shadow-2xl transition-all">
            <span className="relative z-10 font-bold text-[10px] tracking-widest">RESERVE</span>
            <div className="absolute inset-0 bg-marigold-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`xl:hidden p-2 transition-transform active:scale-90 ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-[1px] w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-[1px] w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[1px] w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white text-luxury-dark absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 flex flex-col p-8 gap-8 animate-fade-in">
          {NAV_LINKS.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-800 hover:text-marigold-600 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link to="/rooms" onClick={() => setIsMenuOpen(false)} className="bg-marigold-700 text-white w-full py-5 font-bold uppercase tracking-[0.3em] text-[10px] text-center shadow-xl">BOOK NOW</Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 border-b border-white/5 pb-20">
        <div>
          <div className="flex flex-col mb-10">
            <span className="text-2xl font-serif font-bold tracking-[0.4em] uppercase text-marigold-500">Marigold</span>
            <span className="text-[10px] tracking-[0.6em] uppercase text-gray-500 mt-1">Hotels</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-10 font-light max-w-xs">
            The crown jewel of Hyderabad's hospitality. Experience a new era of business luxury where service meets sophistication.
          </p>
          <div className="flex gap-6">
            {['FB', 'IG', 'LI'].map(s => (
              <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-marigold-600 hover:border-marigold-600 transition-all duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-10 uppercase tracking-[0.3em] text-[10px] text-marigold-400">Navigation</h4>
          <ul className="space-y-5 text-[10px] text-gray-400 font-bold tracking-widest">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-marigold-500 transition-colors uppercase">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-10 uppercase tracking-[0.3em] text-[10px] text-marigold-400">Contact</h4>
          <div className="space-y-8 text-[11px] text-gray-400 font-light">
            <p className="leading-relaxed opacity-70 italic">{MARIGOLD_DETAILS.location}</p>
            <div className="space-y-4">
              <p className="flex flex-col">
                <span className="text-white font-bold mb-1 uppercase text-[9px] tracking-[0.3em]">Phone</span>
                <span className="opacity-70">{MARIGOLD_DETAILS.phones[0]}</span>
              </p>
              <p className="flex flex-col">
                <span className="text-white font-bold mb-1 uppercase text-[9px] tracking-[0.3em]">Email</span>
                <span className="opacity-70">{MARIGOLD_DETAILS.emails.reservations}</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-10 uppercase tracking-[0.3em] text-[10px] text-marigold-400">Newsletter</h4>
          <p className="text-[11px] text-gray-400 mb-8 font-light italic">Receive curated luxury updates and exclusive private offers.</p>
          <form className="relative group" onSubmit={(e) => { e.preventDefault(); alert('Subscription successful.'); }}>
            <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-b border-white/10 w-full py-3 focus:outline-none focus:border-marigold-500 text-[10px] tracking-widest text-white transition-colors" />
            <button type="submit" className="absolute right-0 bottom-3 text-marigold-500 font-bold text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">JOIN</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center text-[8px] text-gray-600 gap-6 uppercase tracking-[0.4em]">
        <p>© {new Date().getFullYear()} Marigold Hotels Hyderabad.</p>
        <p>A flagship signature by Greenpark Group.</p>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-marigold-200 selection:text-luxury-dark">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
