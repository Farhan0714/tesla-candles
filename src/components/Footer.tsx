"use client";

import { Flame, Globe, Send, Play, Heart } from "lucide-react";

const footerLinks = {
  Shop: ["All Candles", "Best Sellers", "New Arrivals", "Gift Sets", "Accessories"],
  Company: ["Our Story", "Sustainability", "Careers", "Press", "Wholesale"],
  Support: ["FAQ", "Contact Us", "Shipping & Returns", "Candle Care Guide", "Track Order"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-honey/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-honey to-amber-glow flex items-center justify-center animate-flicker">
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
            <p className="text-sm text-ash leading-relaxed mb-6 max-w-xs">
              Tesla reimagined as a luxury candle house. Because the best
              kind of electricity is the warm, flickering kind.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, Send, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass-warm flex items-center justify-center text-ash hover:text-honey hover:bg-honey/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-ivory mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ash hover:text-honey transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-honey/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke/60">
            © 2026 Tesla Candles. All rights reserved. This is a fictional brand created
            for educational purposes. Not affiliated with Tesla, Inc.
          </p>
          <p className="text-xs text-smoke/60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-flame fill-flame" /> in Portland, OR
          </p>
        </div>
      </div>
    </footer>
  );
}
