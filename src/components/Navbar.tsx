"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-xl border-b border-honey/10 shadow-lg shadow-honey/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-honey to-amber-glow flex items-center justify-center shadow-lg shadow-honey/20 group-hover:shadow-honey/40 transition-shadow animate-flicker">
              <Flame className="w-5 h-5 text-charcoal" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-ivory tracking-[0.2em] leading-none">
                TESLA
              </span>
              <span className="text-[10px] font-medium text-honey/70 tracking-[0.3em] uppercase leading-none">
                Candles
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Collection", "Our Story", "Reviews", "Subscribe"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-ash hover:text-honey transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-honey to-amber-glow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#subscribe"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-honey/30 transition-all duration-300 hover:scale-105"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ash hover:text-honey transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass px-4 py-6 space-y-4">
          {["Collection", "Our Story", "Reviews", "Subscribe"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="block text-ash hover:text-honey transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#subscribe"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal text-sm font-bold"
          >
            Shop Now
          </a>
        </div>
      </div>
    </nav>
  );
}
