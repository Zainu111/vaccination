import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 text-center px-4 py-8 sm:py-12 text-sm leading-relaxed">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6">
          <Link to="/" className="flex-shrink-0">
            <img src="/ghp-logo.png" alt="Logo" className="h-20 sm:h-24 w-auto" />
          </Link>

          <div className="flex-1">
            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-4 text-xs sm:text-sm">
              <Link to="/terms-conditions" className="text-gray-300 hover:text-[#e67e22] transition-colors">Terms & Conditions</Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-[#e67e22] transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link to="/disclaimer" className="text-gray-300 hover:text-[#e67e22] transition-colors">Disclaimer</Link>
              <span className="text-gray-600">|</span>
              <Link to="/imprint" className="text-gray-300 hover:text-[#e67e22] transition-colors">Imprint</Link>
              <span className="text-gray-600">|</span>
              <Link to="https://id-ea.org/contact-us/" className="text-gray-300 hover:text-[#e67e22] transition-colors">Contacts</Link>
              <span className="text-gray-600">|</span>
              <Link to="https://id-ea.org/contact-us/" className="text-gray-300 hover:text-[#e67e22] transition-colors">LinkedIn</Link>
            </nav>

            <div className="text-xs sm:text-sm text-gray-400 mb-3">
              Copyright © 2009 - {new Date().getFullYear()} Global Health Press Pte Ltd. <br className="sm:hidden" />
              Reg. No. 200921795N All Rights Reserved.
            </div>

            <div className="text-xs sm:text-sm">
              Subject to <a href="#" className="text-[#4da6ff] hover:text-[#66b3ff] transition-colors underline">Creative Commons Licence (cc)</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
