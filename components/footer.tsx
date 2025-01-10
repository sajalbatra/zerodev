import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-60">
       
          <div className="col-span-2">
            <h2 className="text-6xl font-bold leading-tight mb-2">
              Innovate.Code.Evolve
            </h2>
            <p className="text-gray-400 text-lg">
              One pixel at a time. Let's build something amazing together.
            </p>
          </div>

      
          <div className="grid grid-cols-2 gap-8">
      
            

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" /> Github
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zero.devs/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zerodev. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;