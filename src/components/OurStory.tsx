"use client";

import { Zap, Flame, Heart } from "lucide-react";

const storyPoints = [
  {
    icon: Zap,
    title: "The Spark",
    description:
      "In 2024, a Tesla engineer burned out (literally). After 80-hour weeks building the future of transportation, she came home to a cold, lifeless apartment. That night, she lit a candle and had an idea.",
    gradient: "from-electric to-honey",
  },
  {
    icon: Flame,
    title: "The Flame",
    description:
      "What if Tesla — the brand that electrified the world — could also warm it? Not with batteries or motors, but with something ancient, primal, and deeply human: fire.",
    gradient: "from-honey to-flame",
  },
  {
    icon: Heart,
    title: "The Glow",
    description:
      "Today, Tesla Candles pours over 10,000 candles a month, each one hand-crafted with the same obsessive engineering that goes into every Tesla vehicle. Precision. Beauty. Warmth.",
    gradient: "from-flame to-honey",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6 leading-tight">
              From <span className="font-serif italic text-honey">Superchargers</span>
              <br />to <span className="font-serif italic text-amber-glow">Candleflames</span>
            </h2>
            <p className="text-ash text-lg leading-relaxed mb-6">
              Tesla changed how the world moves. Now we&apos;re changing how the
              world <em className="text-ivory not-italic font-medium">feels</em>.
              Every candle is engineered with the same precision that goes into a
              Model S — from the wax blend to the wick geometry to the scent
              diffusion algorithm.
            </p>
            <p className="text-ash text-lg leading-relaxed">
              We don&apos;t just make candles. We make{" "}
              <span className="text-honey font-medium">experiences</span>. Each
              flame is a tiny power plant, converting wax into warmth, light, and
              an atmosphere that makes you never want to leave home.
            </p>
          </div>

          {/* Right: Story Cards */}
          <div className="space-y-6">
            {storyPoints.map((point, index) => (
              <div
                key={index}
                className="group flex gap-5 p-6 rounded-2xl glass-warm hover:bg-honey/[0.06] transition-all duration-500"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <point.icon className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ivory mb-1">{point.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
