"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link
          href="/"
          className="site-logo"
          onClick={handleLinkClick}
        >
          Pangasinan Heritage
        </Link>

        {/* Hamburger Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav
          className={`main-navigation ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <Link
            href="/"
            className="navigation-item"
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="navigation-item"
            onClick={handleLinkClick}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="navigation-item"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
}