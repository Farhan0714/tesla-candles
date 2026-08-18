"use client";

import { Check, Crown, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter Flame",
    tagline: "Perfect for first-timers",
    price: "35",
    period: "/candle",
    icon: Sparkles,
    gradient: "from-smoke to-ash",
    borderColor: "border-ash/20",
    features: [
      "1 Signature Candle (8 oz)",
      "Choose from 6 core scents",
      "Hand-poured wax blend",
      "60+ hour burn time",
      "Free shipping on orders over $50",
      "30-day satisfaction guarantee",
    ],
    cta: "Light Your First Flame",
    popular: false,
  },
  {
    name: "Full Charge",
    tagline: "Our most popular option",
    price: "89",
    period: "/quarter",
    icon: Zap,
    gradient: "from-honey to-amber-glow",
    borderColor: "border-honey/40",
    features: [
      "3 Candles per quarter (12 oz)",
      "Exclusive seasonal scents",
      "Free engraving option",
      "Priority early access to new drops",
      "Free express shipping always",
      "60-day satisfaction guarantee",
      "Complimentary matches set",
      "Birthday candle gift",
    ],
    cta: "Go Full Charge",
    popular: true,
  },
  {
    name: "Infinite",
    tagline: "The ultimate candle experience",
    price: "199",
    period: "/quarter",
    icon: Crown,
    gradient: "from-honey via-amber-glow to-flame",
    borderColor: "border-honey/30",
    features: [
      "6 Candles per quarter (12 oz)",
      "Every scent including exclusives",
      "Personalized scent consultation",
      "Custom engraved candle vessels",
      "Free same-day shipping",
      "Lifetime satisfaction guarantee",
      "VIP access to candle-making events",
      "Annual limited-edition collector set",
      "Direct line to our founder",
    ],
    cta: "Go Infinite",
    popular: false,
  },
];

export default function Subscribe() {
  return (
    <section id="subscribe" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-honey/4 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey mb-4">
            Subscribe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6">
            Choose Your <span className="font-serif italic text-honey">Charge</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ash text-lg">
            Subscribe and never run out of ambiance. Save up to 35% and get
            exclusive access to limited-edition scents.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl border ${plan.borderColor} overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? "glass glow-amber" : "glass-light"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-honey via-amber-glow to-flame" />
              )}

              <div className="p-8 sm:p-10 flex flex-col flex-1">
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-honey to-amber-glow text-charcoal text-xs font-bold mb-4 w-fit">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}
                >
                  <plan.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-ivory">{plan.name}</h3>
                <p className="text-sm text-ash mt-1 mb-6">{plan.tagline}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-ash">$</span>
                    <span className="text-5xl font-bold text-ivory">{plan.price}</span>
                    <span className="text-sm text-ash">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-honey" : "text-ash"
                        }`}
                      />
                      <span className="text-sm text-ash">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`w-full py-4 rounded-full text-center font-bold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-honey to-amber-glow text-charcoal hover:shadow-2xl hover:shadow-honey/30"
                      : "glass-warm text-ivory hover:bg-honey/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
