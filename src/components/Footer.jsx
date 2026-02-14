import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand - Center */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
              Deepshikha Shaw
            </h3>
            <p className="text-slate-400">
              Salesforce Consultant | CPQ | LWC | OmniStudio Development            
            </p>
          </div>

          {/* Connect */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 md:justify-end">
              <a
                href="https://github.com/Deepshikha01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepshikha-shaw-b1267a128/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shawdeepshikha@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Deepshikha Shaw. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
