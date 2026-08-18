"use client";

import { ArrowRight, Flame, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute top-10 left-10 animate-float opacity-20">
          <Flame className="w-8 h-8 text-honey" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-slow opacity-20">
          <Sparkles className="w-8 h-8 text-amber-glow" />
        </div>

        {/* Card */}
        <div className="relative rounded-3xl glass p-10 sm:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-honey/8 via-transparent to-flame/5" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-honey to-amber-glow flex items-center justify-center mx-auto mb-8 shadow-lg shadow-honey/30 animate-glow-pulse">
              <Flame className="w-8 h-8 text-charcoal" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6 leading-tight">
              Light Up Your
              <br />
              <span className="font-serif italic text-honey">World</span>
            </h2>

            <p className="max-w-lg mx-auto text-ash text-lg mb-10">
              Join 150,000+ people who&apos;ve switched to Tesla Candles.
              First-time buyers get 20% off with code{" "}
              <span className="text-honey font-bold">WARMUP20</span>.
            </p>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-honey/20 text-ivory placeholder:text-smoke/50 focus:outline-none focus:border-honey focus:ring-1 focus:ring-honey transition-all text-sm"
              />
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal font-bold text-sm hover:shadow-lg hover:shadow-honey/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get 20% Off
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-smoke/60">
              Free shipping · 30-day returns · Hand-poured in Portland, OR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
