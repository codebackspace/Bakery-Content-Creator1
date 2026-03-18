import React from 'react';
import { Link } from 'wouter';
import { Croissant, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Croissant className="h-6 w-6 text-amber-400" />
              <span className="text-xl font-bold font-serif text-white">Sweet Crumbs</span>
            </div>
            <p className="text-amber-300 text-sm leading-relaxed">
              Baking happiness since 2010. Every loaf, every cake, every cookie is made with love and the finest ingredients.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/menu', 'Our Menu'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>
                    <span className="text-amber-300 hover:text-white transition-colors cursor-pointer">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {['Fresh Breads', 'Pastries', 'Cakes & Tarts', 'Cookies'].map(cat => (
                <li key={cat}>
                  <Link href="/menu">
                    <span className="text-amber-300 hover:text-white transition-colors cursor-pointer">{cat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-amber-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>42 Baker Street, Dhaka 1200, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2 text-amber-300">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2 text-amber-300">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@sweetcrumbs.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors">
                  <Icon className="h-4 w-4 text-amber-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 text-center text-amber-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved. Baked with love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
