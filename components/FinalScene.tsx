"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function FinalScene() {
  return (
    <section
      id="final"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020207] px-6 py-32 text-white"
    >
      {/* =========================
          NIGHT SKY
      ========================== */}

      <div className="pointer-events-none absolute inset-0">

        {Array.from({ length: 90 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: Math.random() * 0.5 + 0.15,
            }}
            animate={{
              opacity: [
                Math.random() * 0.2 + 0.2,
                Math.random() * 0.8 + 0.2,
                Math.random() * 0.2 + 0.2,
              ],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Moon glow */}

        <div className="absolute left-1/2 top-[25%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

        {/* Bottom pink glow */}

        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

      </div>

      {/* =========================
          SHOOTING STARS
      ========================== */}

      <motion.div
        initial={{
          x: "-20vw",
          y: "-20vh",
          opacity: 0,
        }}
        animate={{
          x: "120vw",
          y: "80vh",
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-0 top-0"
      >
        <div className="h-[2px] w-32 rotate-45 bg-gradient-to-r from-transparent via-white to-purple-200" />

        <div className="absolute right-0 top-[-4px] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]" />
      </motion.div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Moon */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(255,255,255,0.08)]"
        >

          <span className="text-6xl">
            🌙
          </span>

        </motion.div>

        {/* Small heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-10 flex items-center justify-center gap-3"
        >

          <Sparkles
            size={15}
            className="text-pink-200/60"
          />

          <p className="text-xs uppercase tracking-[0.45em] text-pink-200/60">
            Happy Birthday
          </p>

          <Sparkles
            size={15}
            className="text-pink-200/60"
          />

        </motion.div>

        {/* Name */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="mt-5 text-6xl font-black tracking-tight md:text-8xl"
        >
         Hey baby
          <span className="text-pink-200">
            .
          </span>
        </motion.h2>

        {/* Message */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mx-auto mt-8 max-w-xl"
        >

          <p className="text-base leading-8 text-white/45 md:text-lg">
            I hope this new chapter brings you more laughter,
            more beautiful moments, and everything your heart
            has been quietly wishing for.
          </p>

          <p className="mt-6 text-base leading-8 text-white/45 md:text-lg">
            Thank you for being you.
            <br />
            And thank you for letting me be part of your story.
          </p>

        </motion.div>

        {/* Heart */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1.1,
            type: "spring",
            stiffness: 180,
            damping: 15,
          }}
          className="mt-12 flex justify-center"
        >

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-300/10"
          >

            <Heart
              size={28}
              fill="currentColor"
              className="text-pink-200"
            />

          </motion.div>

        </motion.div>

        {/* Final line */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1.5,
          }}
          className="mt-8 text-sm text-white/25"
        >
          Here's to another beautiful year of you. ✨
        </motion.p>

        {/* Stars */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1.8,
          }}
          className="mt-12 flex justify-center gap-4 text-lg"
        >
          <span>✨</span>
          <span>❤️</span>
          <span>✨</span>
        </motion.div>

      </div>

      {/* Bottom fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020207] to-transparent" />

    </section>
  );
}