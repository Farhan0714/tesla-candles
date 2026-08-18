"use client";

import { ArrowRight, Flame, Star, TrendingUp } from "lucide-react";

const candles = [
  {
    name: "Cyberpunk Noir",
    tagline: "Dark amber, smoked oud, and midnight leather",
    price: "$68",
    originalPrice: "$89",
    rating: 4.97,
    reviews: 2847,
    badge: "Best Seller",
    badgeColor: "bg-honey text-charcoal",
    gradient: "from-honey via-amber-glow to-warm-brown",
    notes: ["Top: Black Pepper", "Heart: Amber", "Base: Oud Wood"],
    burnTime: "65 hours",
    emoji: "🖤",
  },
  {
    name: "Autopilot",
    tagline: "Lavender fields, chamomile mist, and deep calm",
    price: "$62",
    originalPrice: "$79",
    rating: 4.95,
    reviews: 1923,
    badge: "Editor's Pick",
    badgeColor: "bg-electric text-white",
    gradient: "from-electric via-purple-400 to-honey",
    notes: ["Top: Bergamot", "Heart: Lavender", "Base: Chamomile"],
    burnTime: "60 hours",
    emoji: "😴",
  },
  {
    name: "Supercharger",
    tagline: "Cinnamon bark, clove bud, and smoky vanilla",
    price: "$58",
    originalPrice: "$72",
    rating: 4.93,
    reviews: 3156,
    badge: "New",
    badgeColor: "bg-flame text-white",
    gradient: "from-flame via-amber-glow to-honey",
    notes: ["Top: Cinnamon", "Heart: Clove", "Base: Vanilla"],
    burnTime: "55 hours",
    emoji: "🔥",
  },
  {
    name: "Powerwall",
    tagline: "Vanilla bean, sandalwood, and warm cashmere",
    price: "$74",
    originalPrice: "$95",
    rating: 4.98,
    reviews: 1478,
    badge: "Premium",
    badgeColor: "bg-honey text-charcoal",
    gradient: "from-cream via-honey to-amber-glow",
    notes: ["Top: Vanilla", "Heart: Cashmere", "Base: Sandalwood"],
    burnTime: "80 hours",
    emoji: "✨",
  },
  {
    name: "Roadster",
    tagline: "Damask rose, wild oud, and velvet musk",
    price: "$82",
    originalPrice: "$105",
    rating: 4.96,
    reviews: 987,
    badge: "Luxury",
    badgeColor: "bg-gradient-to-r from-flame to-honey text-white",
    gradient: "from-flame via-pink-400 to-honey",
    notes: ["Top: Rose Petal", "Heart: Oud", "Base: Musk"],
    burnTime: "70 hours",
    emoji: "🌹",
  },
  {
    name: "Model Z",
    tagline: "Fresh rain, petrichor, and wet stone",
    price: "$64",
    originalPrice: "$82",
    rating: 4.94,
    reviews: 2134,
    badge: "Best Seller",
    badgeColor: "bg-honey text-charcoal",
    gradient: "from-honey via-amber-200 to-cream",
    notes: ["Top: Ozone", "Heart: Petrichor", "Base: Stone"],
    burnTime: "60 hours",
    emoji: "🌧️",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey mb-4">
            The Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6">
            Candles That <span className="font-serif italic text-honey">Charge</span>
            <br />
            <span className="gradient-text">Your Senses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ash text-lg">
            Each scent is named after a Tesla product — because the future
            should smell as good as it looks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candles.map((candle, index) => (
            <div
              key={index}
              className="group relative rounded-3xl glass-light overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Visual */}
              <div
                className={`relative h-56 bg-gradient-to-br ${candle.gradient} flex items-center justify-center`}
              >
                <span className="text-7xl group-hover:scale-110 group-hover:animate-flicker transition-transform duration-500">
                  {candle.emoji}
                </span>

                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${candle.badgeColor}`}>
                  {candle.badge}
                </div>

                {/* Trending */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                  <TrendingUp className="w-3 h-3 text-green-300" />
                  <span className="text-[10px] font-semibold text-green-300">Trending</span>
                </div>

                {/* Burn time */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  <Flame className="w-3 h-3 text-honey" />
                  <span className="text-[10px] font-semibold text-honey">{candle.burnTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-honey fill-honey" />
                    ))}
                  </div>
                  <span className="text-xs text-smoke">
                    {candle.rating} ({candle.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-ivory mb-1">{candle.name}</h3>
                <p className="text-sm text-ash mb-3">{candle.tagline}</p>

                {/* Notes */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {candle.notes.map((note, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-honey/8 text-[11px] text-honey/80 font-medium">
                      {note}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-ivory">{candle.price}</span>
                    <span className="text-sm text-smoke line-through">{candle.originalPrice}</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal text-sm font-bold hover:shadow-lg hover:shadow-honey/30 transition-all duration-300 group-hover:scale-105">
                    Add to Cart
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
