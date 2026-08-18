"use client";

import { ArrowDown, Sparkles, Star } from "lucide-react";

function CandleGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Warm ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-honey/8 rounded-full blur-[180px] animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-glow/6 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-honey/4 rounded-full blur-[200px]" />
      <div className="absolute top-20 right-1/3 w-[300px] h-[300px] bg-flame/5 rounded-full blur-[120px] animate-float-slow" />
      {/* Floating embers */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#fbbf24" : "#d4a534",
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CandleGlow />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-warm mb-8 animate-float-slow">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 text-honey fill-honey" />
            ))}
          </div>
          <span className="text-xs font-medium text-honey/90">
            Rated #1 Luxury Candle Brand 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.9] mb-6">
          <span className="block text-ivory font-serif italic font-light">Electricity,</span>
          <span className="block text-ivory font-serif italic font-light mt-2">But Make It</span>
          <span className="block gradient-text mt-2">Cozy.</span>
        </h1>

        {/* Subhead */}
        <p className="max-w-xl mx-auto text-lg sm:text-xl text-ash leading-relaxed mb-10">
          Tesla reimagined as a luxury candle house. We took the world&apos;s most
          iconic electric brand and gave it a{" "}
          <span className="text-honey font-medium">warm glow</span>. Premium
          hand-poured candles charged with ambiance.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#collection"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-honey/30 transition-all duration-300 hover:scale-105"
          >
            Explore the Collection
          </a>
          <a
            href="#our-story"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-warm text-ivory font-medium text-lg hover:bg-honey/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Our Story
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {[
            { value: "150K+", label: "Candles Poured" },
            { value: "4.97", label: "Average Rating" },
            { value: "12", label: "Artisan Scents" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text-gold">{stat.value}</p>
              <p className="text-xs text-smoke mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-smoke font-medium">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-honey/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-honey rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}
