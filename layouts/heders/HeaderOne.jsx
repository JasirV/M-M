'use client';

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const HeaderOne = () => {
  // State to track the current route
  const [currentRoute, setCurrentRoute] = useState("/");

  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle link clicks
  const handleLinkClick = (href) => {
    setCurrentRoute(href);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <Navbar shouldHideOnScroll className="flex justify-between">
      <NavbarBrand className="md:mx-10">
        <AcmeLogo />
        <p className="font-bold text-inherit">WEDDINGS</p>
      </NavbarBrand>

      {/* Mobile Menu Toggle Button */}
      <button
        className="sm:hidden p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Navigation Links (hidden on mobile) */}
      <NavbarContent className="hidden sm:flex gap-4 mr-20" justify="center">
        <NavbarItem isActive={currentRoute === "/"}>
          <Link href="/" onClick={() => handleLinkClick("/")}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentRoute === "/about"}>
          <Link href="/about" onClick={() => handleLinkClick("/about")}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link href="#" className="cursor-pointer">
                Services
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Services Dropdown">
              <DropdownItem className="hover:scale-105" key="wedding">
                <Link href="/services/wedding" onClick={() => handleLinkClick("/services/wedding")}>
                  Wedding Photography
                </Link>
              </DropdownItem>
              <DropdownItem className="hover:scale-105" key="pre-wedding">
                <Link href="/services/pre-wedding" onClick={() => handleLinkClick("/services/pre-wedding")}>
                  Pre-Wedding Shoots
                </Link>
              </DropdownItem>
              <DropdownItem className="hover:scale-105" key="candid">
                <Link href="/services/candid" onClick={() => handleLinkClick("/services/candid")}>
                  Candid Photography
                </Link>
              </DropdownItem>
              <DropdownItem className="hover:scale-105" key="videography">
                <Link href="/services/videography" onClick={() => handleLinkClick("/services/videography")}>
                  Wedding Videography
                </Link>
              </DropdownItem>
              <DropdownItem className="hover:scale-105" key="destination">
                <Link href="/services/destination" onClick={() => handleLinkClick("/services/destination")}>
                  Destination Weddings
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem isActive={currentRoute === "/contact"}>
          <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navigation Links (visible when menu is open) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <NavbarContent className="flex flex-col gap-4 p-4">
            <NavbarItem className="border-b w-full" isActive={currentRoute === "/"}>
              <Link  href="/" onClick={() => handleLinkClick("/")}>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem className="border-b w-full" isActive={currentRoute === "/about"}>
              <Link href="/about" onClick={() => handleLinkClick("/about")}>
                About
              </Link>
            </NavbarItem>
            <NavbarItem className="border-b w-full">
              <Dropdown>
                <DropdownTrigger>
                  <Link href="#" className="cursor-pointer">
                    Services
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Services Dropdown" className="bg-rose-400 rounded-md">
                  <DropdownItem className="border-b w-full" key="wedding">
                    <Link href="/services/wedding" onClick={() => handleLinkClick("/services/wedding")}>
                      Wedding Photography
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="border-b w-full" key="pre-wedding">
                    <Link href="/services/pre-wedding" onClick={() => handleLinkClick("/services/pre-wedding")}>
                      Pre-Wedding Shoots
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="border-b w-full" key="candid">
                    <Link href="/services/candid" onClick={() => handleLinkClick("/services/candid")}>
                      Candid Photography
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="border-b w-full" key="videography">
                    <Link href="/services/videography" onClick={() => handleLinkClick("/services/videography")}>
                      Wedding Videography
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="destination">
                    <Link href="/services/destination" onClick={() => handleLinkClick("/services/destination")}>
                      Destination Weddings
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem className="border-b w-full" isActive={currentRoute === "/contact"}>
              <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      )}
    </Navbar>
  );
};

export default HeaderOne;