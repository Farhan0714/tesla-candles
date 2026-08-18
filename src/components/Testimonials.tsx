"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Interior Designer, NYC",
    content:
      "I've tested hundreds of luxury candles. Tesla Candles is the only brand where I can genuinely feel the engineering. The burn is perfect, the scent throw is incredible, and my clients always ask what that amazing smell is.",
    rating: 5,
    avatar: "S",
    gradient: "from-honey to-amber-glow",
  },
  {
    name: "James Park",
    role: "Tech CEO",
    content:
      "I bought Cyberpunk Noir as a joke — a Tesla candle, ha! Now it's the only candle in my office. The scent is addictive and the design is stunning. I've gifted 20+ of these.",
    rating: 5,
    avatar: "J",
    gradient: "from-amber-glow to-flame",
  },
  {
    name: "Elena Rodriguez",
    role: "Wellness Coach",
    content:
      "Autopilot has become my nightly ritual. Lavender and chamomile done RIGHT. I light it 30 minutes before bed and my sleep has genuinely improved. This isn't just a candle — it's a tool.",
    rating: 5,
    avatar: "E",
    gradient: "from-electric to-honey",
  },
  {
    name: "David Kim",
    role: "Professional Chef",
    content:
      "As someone who works with scent and flavor professionally, I'm blown away by the complexity of these fragrances. Powerwall is a masterwork of vanilla and sandalwood.",
    rating: 5,
    avatar: "D",
    gradient: "from-honey to-pink-400",
  },
  {
    name: "Aisha Johnson",
    role: "YouTuber, 2M subscribers",
    content:
      "My entire audience went crazy when I featured these. The packaging is gorgeous, the candles are massive, and the scents are unlike anything I've ever smelled. My most-viewed video of 2026.",
    rating: 5,
    avatar: "A",
    gradient: "from-flame to-honey",
  },
  {
    name: "Marcus Lee",
    role: "Gift Shop Owner",
    content:
      "I started carrying Tesla Candles in my boutique and they sell out every single week. The price point is perfect for luxury gifting, and customers come back for different scents.",
    rating: 5,
    avatar: "M",
    gradient: "from-honey to-amber-glow",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6">
            What Our <span className="font-serif italic text-honey">Glow</span>
            <br />
            Community Says
          </h2>
          <p className="max-w-2xl mx-auto text-ash text-lg">
            Join 150,000+ people who&apos;ve transformed their spaces with Tesla Candles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl glass-warm hover:bg-honey/[0.06] transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-honey/20 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-honey fill-honey" />
                ))}
              </div>
              <p className="text-ash text-sm leading-relaxed mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-charcoal text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-ivory text-sm font-semibold">{t.name}</p>
                  <p className="text-smoke text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: "150K+", label: "Candles Poured" },
            { value: "4.97", label: "Average Rating" },
            { value: "99%", label: "Would Repurchase" },
            { value: "65hr+", label: "Avg Burn Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text-gold">{stat.value}</p>
              <p className="text-xs text-smoke mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
