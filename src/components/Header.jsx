import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <div className="text-white text-2xl font-bold">FITGURU</div>
        <nav className="flex space-x-6 text-white">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/exercise" className="hover:text-gray-300">
            Exercise
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
