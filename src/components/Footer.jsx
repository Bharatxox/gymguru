import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-16">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FITGURU. All rights reserved.
        </p>
        <nav className="mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
          <span className="text-gray-400"> | </span>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 mx-2"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
