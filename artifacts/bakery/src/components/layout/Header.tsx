import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingBag, Menu, X, Croissant } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Croissant className={`h-7 w-7 ${isScrolled ? 'text-amber-700' : 'text-white'}`} />
            <span className={`text-xl font-bold font-serif ${isScrolled ? 'text-amber-900' : 'text-white'}`}>ARK BAKEHOUSE</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium cursor-pointer transition-colors hover:text-amber-700 ${
                  location === link.href
                    ? 'text-amber-700 border-b-2 border-amber-700 pb-0.5'
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <ShoppingBag className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-700`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen
              ? <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              : <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-800 cursor-pointer border-b border-gray-50 ${
                  location === link.href ? 'text-amber-800 font-semibold bg-amber-50' : ''
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
