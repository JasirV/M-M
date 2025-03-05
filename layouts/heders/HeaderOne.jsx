"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  // ✅ Import usePathname
import { FaMoon, FaSun } from "react-icons/fa";

const HeaderOne = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const currentRoute = usePathname();  // ✅ Dynamically get the current route

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-md transition-transform duration-300 ${isNavVisible ? "translate-y-0" : "-translate-y-full"} ${darkMode ? 'bg-black' : 'bg-white'} z-50`}>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"/>
          </svg>
          <p className="font-bold text-lg">WEDDINGS</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6">
          <Link href="/" className={`nav-link ${currentRoute === "/" ? "font-semibold" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${currentRoute === "/about" ? "font-semibold" : ""}`}>
            About
          </Link>
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)}>
            <button className={`nav-link ${["/service/wedding", "/service/candid", "/service/videography", "/service/destination"].includes(currentRoute) ? "font-semibold" : ""}`}>
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white dark:bg-black shadow-lg p-2 rounded-md w-56" onMouseLeave={() => setIsDropdownOpen(false)}>
                <Link href="/service/wedding" className="dropdown-item">
                  Wedding Photography
                </Link>
                <Link href="/service/pre-wedding" className="dropdown-item">
                  Pre-Wedding Shoots
                </Link>
                <Link href="/service/candid" className="dropdown-item">
                  Candid Photography
                </Link>
                <Link href="/service/videography" className="dropdown-item">
                  Wedding Videography
                </Link>
                <Link href="/service/destination" className="dropdown-item">
                  Destination Weddings
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className={`nav-link ${currentRoute === "/contact" ? "font-semibold" : ""}`}>
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-900">
            {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg p-4">
          <Link href="/" className="mobile-link">
            Home
          </Link>
          <Link href="/about" className="mobile-link">
            About
          </Link>
          <div className="relative">
            <button className="mobile-link" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Services
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-gray-100 shadow-md rounded-md">
                <Link href="/service/wedding" className="mobile-dropdown-item">
                  Wedding Photography
                </Link>
                <Link href="/service/pre-wedding" className="mobile-dropdown-item">
                  Pre-Wedding Shoots
                </Link>
                <Link href="/service/candid" className="mobile-dropdown-item">
                  Candid Photography
                </Link>
                <Link href="/service/videography" className="mobile-dropdown-item">
                  Wedding Videography
                </Link>
                <Link href="/service/destination" className="mobile-dropdown-item">
                  Destination Weddings
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="mobile-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HeaderOne;
