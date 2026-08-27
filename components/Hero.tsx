"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToLetter = () => {
    document
      .getElementById("love-letter")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050509] px-6 text-white" id="hero">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-pink-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]"
        />

      </div>

      {/* =========================
          FLOATING PARTICLES
      ========================== */}
      <div className="pointer-events-none absolute inset-0">

        {Array.from({ length: 45 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/50"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, -180],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">

        {/* Floating heart */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            rotateY: -90,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateZ: [-4, 4, -4],
              rotateY: [0, 12, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-7xl drop-shadow-[0_0_45px_rgba(244,114,182,0.45)] md:text-8xl"
          >
            ❤️
          </motion.div>
        </motion.div>

        {/* Small heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="mt-8 text-xs uppercase tracking-[0.5em] text-pink-200/60"
        >
          A little surprise for
        </motion.p>

        {/* Winnie */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(15px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.8,
            duration: 1.4,
          }}
          className="mt-4 bg-gradient-to-r from-pink-100 via-white to-purple-200 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl"
        >
        Happy Birthday
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-6 max-w-xl text-base leading-8 text-white/45 md:text-lg"
        >
         My cute baby🥰
          
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToLetter}
          className="group relative mt-10 flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-sm font-semibold backdrop-blur-xl transition"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"
            initial={{
              x: "-100%",
            }}
            whileHover={{
              x: "0%",
            }}
            transition={{
              duration: 0.4,
            }}
          />

          <span className="relative z-10 flex items-center gap-2">
            <Sparkles size={16} />
            Open your surprise
          </span>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.7,
          }}
          className="mt-16 flex flex-col items-center text-white/25"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll to begin
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-3"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050509] to-transparent" />

    </section>
  );
}