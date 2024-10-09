"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Game Gallery</h2>
            <p className="text-sm">
              Your one-stop destination for online games
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <Link
                  href="/pages/privacy"
                  className="text-sm hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/help"
                  className="text-sm hover:text-gray-300"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-sm hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Game Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
