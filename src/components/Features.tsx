"use client";

import { Leaf, Timer, Beaker, Droplets, Wind, Shield } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Engineered Wax Blend",
    description:
      "Our proprietary soy-coconut wax blend is formulated like a Tesla battery — optimized for maximum performance, clean burn, and zero toxins.",
    gradient: "from-honey to-amber-glow",
  },
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description:
      "Every ingredient is sustainably sourced. No paraffin, no synthetic dyes, no phthalates. Just pure, clean luxury.",
    gradient: "from-green-500 to-honey",
  },
  {
    icon: Timer,
    title: "60-80 Hour Burn Time",
    description:
      "Like a Tesla battery charge, our candles are built to last. Each one burns for 60-80 hours of continuous ambient glow.",
    gradient: "from-amber-glow to-honey",
  },
  {
    icon: Wind,
    title: "Precision Wick Technology",
    description:
      "Engineered wicks for optimal flame height and wax pool diameter. Every detail is calculated for the perfect burn.",
    gradient: "from-electric to-honey",
  },
  {
    icon: Droplets,
    title: "Scent Diffusion System",
    description:
      "Our fragrance throw technology ensures your room fills with scent within minutes — not hours. Powerful yet balanced.",
    gradient: "from-honey to-pink-400",
  },
  {
    icon: Shield,
    title: "Hand-Poured Promise",
    description:
      "Every single candle is hand-poured in small batches in Portland, Oregon. Quality over quantity, always.",
    gradient: "from-honey to-green-400",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey mb-4">
            Why Tesla Candles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6">
            Engineered for
            <br />
            <span className="font-serif italic text-honey">Perfect Ambiance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ash text-lg">
            We approach candle-making the way Tesla approaches engineering —
            with obsessive precision and zero compromise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl glass-warm hover:bg-honey/[0.06] transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-lg font-semibold text-ivory mb-3">{feature.title}</h3>
              <p className="text-ash text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
