"use client";
import Link from "next/link";
import React from "react";

import SearchBar from "./SearchBar";

const Header = ({ onSearch, showSearchBar = true }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
          Game Gallery
        </Link>
        <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {showSearchBar && <SearchBar onSearch={onSearch} />}
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/categories" className="hover:text-gray-300">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
