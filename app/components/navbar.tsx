"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [top, setTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const handleScroll = () => {
    setIsOpen(false);
    if (window.scrollY > lastScrollY.current) {
      setTop(-100);
    } else {
      setTop(0);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="fixed flex flex-row justify-between w-full bg-[#515a5fcc] md:bg-transparent py-5 text-white text-lg items-center  z-40"
      style={{
        top: `${top}px`,
        transition: "top .5s ease-in-out",
        backgroundColor: lastScrollY.current > 5 ? "#515a5fcc" : "",
      }}
    >
      <div className="sm:hidden mx-6" onClick={toggleMenu}>
        <Menu />
      </div>
      <div className=" flex flex-row md:justify-around justify-start w-[80vw] ">
        <Image width={100} height={50} src="/logo.png" alt="logo" />
        <div className="hidden sm:flex gap-5 text-nowrap">
          <Link href="#about">About Us</Link>
          <Link href="#howwehelp">How We Help</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#portfolios">Portfolios</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#insights">Insights</Link>
        </div>
      </div>
      <button className="bg bg-white text-black p-3 rounded-s-xl ml-auto flex text-nowrap">
        Contact Us
      </button>
      {isOpen && (
        <div
          className={`fixed top-16 left-0 w-full bg-[#515a5fcc] text-white flex flex-col items-center gap-5 sm:hidden`}
          style={{
            top: `${top + 92}px`,
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <Link href="#about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="#howwehelp" onClick={toggleMenu}>
            How We Help
          </Link>
          <Link href="#pricing" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link href="#portfolios" onClick={toggleMenu}>
            Portfolios
          </Link>
          <Link href="#testimonials" onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link href="#insights" onClick={toggleMenu}>
            Insights
          </Link>
        </div>
      )}
    </header>
  );
}
