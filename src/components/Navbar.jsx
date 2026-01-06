import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/hero.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Shrink navbar + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-indigo-600 font-semibold'
      : 'text-gray-700 hover:text-indigo-600';

  return (
    <>
      {/* 🔵 Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-1 bg-indigo-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                    {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Unity Foundation Logo"
              className={`transition-all duration-300 ${
                scrolled ? 'h-8' : 'h-10'
              }`}
            />
            <span className="text-xl font-bold text-primary hidden sm:block">
              
                      Unity Foundation
            </span>
          </NavLink>

          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="about" className={navLinkClass}>About</NavLink>
             <NavLink to="gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/programs" className={navLinkClass}>Programs</NavLink>

            

            {/* Donate Button (Always Highlighted) */}
            <NavLink
              to="/donate"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition shadow"
            >
              Donate
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Bars3Icon className="w-8 h-8 text-gray-700" />
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white z-50 transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-5 space-y-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/causes" onClick={() => setMenuOpen(false)}>Causes</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

            <NavLink
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="bg-indigo-600 text-white text-center py-2 rounded-lg font-semibold shadow"
            >
              Donate
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
 