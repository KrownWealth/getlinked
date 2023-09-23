"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Header() {
  const magentaPurpleColor = "#d434fe";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveLink("/");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="container flex items-center 
    justify-between border-b-2 py-2 sm:py-4 h-24">
      <div className="font-ClashBold">
        <h1 className="font-bold text-2xl lg:text-3xl">
          get<span style={{ color: magentaPurpleColor }}>linked</span>
        </h1>
      </div>

      <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        <button onClick={toggleMobileMenu}>
          <Image
            src="/assets/menuicon.svg"
            alt="Mobile Menu"
            width={30}
            height={30}
          />
        </button>
      </div>

      <div className="hidden lg:flex xl:flex 2xl:flex items-center justify-center gap-12 text-base">
        <Link href="/" onClick={() => setActiveLink("/")}>
          Timeline
        </Link>
        <Link href="/overview" onClick={() => setActiveLink("/overview")}>
          Overview
        </Link>
        <Link href="/faq" onClick={() => setActiveLink("/faq")}>
          FAQs
        </Link>
        <Link href="/contact" onClick={() => setActiveLink("/contact")}>
          Contact
        </Link>
        <button className="cta-btn font-montserat font-base" onClick={() => setActiveLink("/register")}>
          <Link href="/register"  className="">
            Register
          </Link>
        </button>
      </div>

      {isMobileMenuOpen && <div className="overlay" onClick={closeMobileMenu} />}

      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-full bg-light-purple text-white shadow-lg z-50">
          <div className="flex justify-end close-btn p-5">
            <button onClick={closeMobileMenu}>
              <FaRegTimesCircle className="font-bold text-white" />
            </button>
          </div>
          <div className="flex flex-col font-bold items-start p-7 text-base">
            <Link
              href="/"
              onClick={() => {
                setActiveLink("/");
                closeMobileMenu();
              }}
              className={`my-2 ${activeLink === "/" && "active"}`}
            >
              Timeline
            </Link>
            <Link
              href="/overview"
              onClick={() => {
                setActiveLink("/overview");
                closeMobileMenu();
              }}
              className={`my-2 ${activeLink === "/overview" && "active"}`}
            >
              Overview
            </Link>
            <Link
              href="/faq"
              onClick={() => {
                setActiveLink("/faq");
                closeMobileMenu();
              }}
              className={`my-2 ${activeLink === "/faq" && "active"}`}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setActiveLink("/contact");
                closeMobileMenu();
              }}
              className={`my-2 ${activeLink === "/contact" && "active"}`}
            >
              Contact
            </Link>
            <button className="cta-btn mt-5">
              <Link href="/register" className="my-4">
                Register
              </Link>
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
