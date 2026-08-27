"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function MakeAWish() {
  const [wish, setWish] = useState("");
  const [sent, setSent] = useState(false);

 const handleWish = async () => {
  if (!wish.trim()) return;

  try {
    const response = await fetch("/api/wish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wish,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send wish");
    }

    setSent(true);
  } catch (error) {
    console.error(error);

    alert(
      "Something went wrong while sending your wish. Please try again."
    );
  }
};

  return (
    <section
      id="wish"
      className="relative min-h-screen overflow-hidden bg-[#03040a] px-6 py-32 text-white"
    >
      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {Array.from({ length: 70 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [
                Math.random() * 0.2 + 0.2,
                Math.random() * 0.8 + 0.3,
                Math.random() * 0.2 + 0.2,
              ],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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

        {/* Purple glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[150px]"
        />

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center">

        {!sent ? (
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
              duration: 0.8,
            }}
            className="w-full text-center"
          >

            {/* Small heading */}

            <div className="flex items-center justify-center gap-3">

              <Sparkles
                size={15}
                className="text-purple-300/60"
              />

              <p className="text-xs uppercase tracking-[0.45em] text-purple-200/60">
                One last little thing
              </p>

              <Sparkles
                size={15}
                className="text-purple-300/60"
              />

            </div>

            {/* Main heading */}

            <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">

              Make a wish

              <span className="ml-2">
                ✨
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 md:text-base">
              Close your eyes for a moment.
              <br />
              Think of something you really want.
              <br />
              Then write it down below.
            </p>

            {/* =================================================
                WISH CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="mx-auto mt-12 max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-xl"
            >

              <div className="rounded-[1.5rem] border border-white/5 bg-black/20 p-6 md:p-8">

                {/* Label */}

                <div className="mb-5 flex items-center gap-2 text-left">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-300/10">

                    <Star
                      size={14}
                      className="text-purple-200"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-semibold">
                     My Baby's wish
                    </p>

                    

                  </div>

                </div>

                {/* Textarea */}

                <textarea
                  value={wish}
                  onChange={(event) =>
                    setWish(event.target.value)
                  }
                  maxLength={300}
                  placeholder="Write your wish here..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-white outline-none placeholder:text-white/20 focus:border-purple-300/30 focus:bg-white/[0.05]"
                />

                {/* Character count */}

                <div className="mt-2 text-right text-[10px] text-white/20">
                  {wish.length}/300
                </div>

                {/* Send */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={handleWish}
                  disabled={!wish.trim()}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-purple-300/10 px-6 py-4 text-sm font-semibold text-purple-100 transition hover:bg-purple-300/20 disabled:cursor-not-allowed disabled:opacity-30"
                >

                  <Send size={16} />

                  Send my wish

                </motion.button>

              </div>

            </motion.div>

           

          </motion.div>
        ) : (

          /* ===================================================
             WISH SENT
          ==================================================== */

          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 16,
              }}
              className="text-center"
            >

              {/* Shooting star */}

              <div className="relative mx-auto h-40 w-40">

                <motion.div
                  initial={{
                    x: -100,
                    y: -70,
                    opacity: 0,
                  }}
                  animate={{
                    x: 100,
                    y: 70,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="absolute left-0 top-0"
                >

                  <div className="h-[2px] w-28 rotate-45 bg-gradient-to-r from-transparent via-white to-purple-200" />

                  <div className="absolute right-0 top-[-4px] h-2 w-2 rounded-full bg-white shadow-[0_0_15px_white]" />

                </motion.div>

                {/* Heart */}

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-300/10"
                >

                  <Heart
                    size={38}
                    fill="currentColor"
                    className="text-pink-200"
                  />

                </motion.div>

              </div>

              <h2 className="mt-6 text-4xl font-black md:text-6xl">
                Wish sent ✨
              </h2>

              <p className="mx-auto mt-5 max-w-lg leading-7 text-white/40">
                Your wish has been granted.               
              </p>

              {/* Wish preview */}

              <div className="mx-auto mt-8 max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-6">

                <p className="text-xs uppercase tracking-[0.3em] text-white/20">
                  Your wish
                </p>

                <p className="mt-4 text-sm italic leading-7 text-white/60">
                  "{wish}"
                </p>

              </div>

              <div className="mt-8 flex justify-center gap-3 text-xl">
                ✨ ❤️ ✨
              </div>

            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
}