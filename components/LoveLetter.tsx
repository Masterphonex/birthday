
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, MailOpen } from "lucide-react";
import { useState } from "react";

const floatingHearts = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 500,
  y: -250 - Math.random() * 150,
  delay: i * 0.15,
  duration: 3.5 + Math.random() * 1.5,
}));

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="relative min-h-screen overflow-hidden bg-[#050509] px-6 py-32 text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]"
        />

        {/* Subtle side glows */}

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-500/[0.03] blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/[0.03] blur-[100px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="text-xs uppercase tracking-[0.45em] text-pink-300/60">
            _____________________
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Something for my stubborn princess
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 md:text-base">
            From the bottom of my stomach abi how they take dey talk am 😂
          </p>

        </motion.div>

        {/* =====================================================
            ENVELOPE / LETTER AREA
        ====================================================== */}

        <div className="relative mx-auto mt-20 flex min-h-[500px] items-center justify-center">

          <AnimatePresence mode="wait">

            {!opened ? (

              /* =================================================
                 CLOSED ENVELOPE
              ================================================== */

              <motion.div
                key="envelope"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
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
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >

                {/* Envelope shadow */}

                <div className="absolute -bottom-10 left-1/2 h-16 w-80 -translate-x-1/2 rounded-full bg-black/50 blur-3xl" />

                {/* Envelope */}

                <motion.button
                  type="button"
                  onClick={() => setOpened(true)}
                  whileHover={{
                    scale: 1.04,
                    rotateZ: -1,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="relative h-64 w-96 max-w-[85vw] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#24151e] to-[#120d15] shadow-2xl"
                >

                  {/* Envelope body */}

                  <div className="absolute inset-0">

                    {/* Left fold */}

                    <div
                      className="absolute bottom-0 left-0 h-full w-1/2"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 50%, 0 100%)",
                        background:
                          "rgba(255,255,255,0.035)",
                      }}
                    />

                    {/* Right fold */}

                    <div
                      className="absolute bottom-0 right-0 h-full w-1/2"
                      style={{
                        clipPath:
                          "polygon(100% 0, 100% 100%, 0 50%)",
                        background:
                          "rgba(255,255,255,0.025)",
                      }}
                    />

                    {/* Bottom fold */}

                    <div
                      className="absolute bottom-0 left-0 h-1/2 w-full"
                      style={{
                        clipPath:
                          "polygon(0 100%, 50% 0, 100% 100%)",
                        background:
                          "rgba(255,255,255,0.04)",
                      }}
                    />

                  </div>

                  {/* Envelope flap */}

                  <motion.div
                    className="absolute left-0 top-0 h-1/2 w-full origin-top"
                    style={{
                      clipPath:
                        "polygon(0 0, 50% 100%, 100% 0)",
                      background:
                        "linear-gradient(135deg, #3b1b2d, #21111c)",
                    }}
                  />

                  {/* Seal */}

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 20px rgba(244,114,182,0.12)",
                        "0 0 35px rgba(244,114,182,0.25)",
                        "0 0 20px rgba(244,114,182,0.12)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-pink-200/20 bg-pink-500/20"
                  >

                    <Heart
                      size={22}
                      fill="currentColor"
                      className="text-pink-200"
                    />

                  </motion.div>

                  {/* Hint */}

                  <span className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-xs text-white/40">
                    Tap to open
                  </span>

                </motion.button>

              </motion.div>

            ) : (

              /* =================================================
                 OPEN LETTER
              ================================================== */

              <motion.div
                key="letter"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-full max-w-2xl"
              >

                {/* =================================================
                    FLOATING HEARTS
                ================================================== */}

                {floatingHearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 30,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: heart.x,
                      y: heart.y,
                      scale: [0.5, 1, 0.7],
                    }}
                    transition={{
                      duration: heart.duration,
                      delay: heart.delay,
                      ease: "easeOut",
                    }}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-30 text-sm text-pink-300/60"
                  >
                    ❤️
                  </motion.div>
                ))}

                {/* =================================================
                    LETTER PAPER
                ================================================== */}

                <motion.article
                  initial={{
                    rotateX: 15,
                  }}
                  animate={{
                    rotateX: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.15,
                  }}
                  className="relative overflow-hidden rounded-[2rem] bg-[#fffaf5] p-8 text-left text-stone-800 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-14"
                >

                  {/* Paper texture */}

                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/80 via-transparent to-amber-100/30" />

                  {/* Paper glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-pink-200/20 blur-[80px]" />

                  <div className="relative">

                    {/* Letter icon */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="flex justify-center"
                    >

                      <MailOpen
                        className="text-pink-400"
                        size={28}
                      />

                    </motion.div>

                    {/* Title */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.4,
                      }}
                      className="mt-5 text-center font-serif text-3xl font-bold md:text-4xl"
                    >
                      Dear Princess ❤️
                    </motion.h3>

                    {/* =================================================
                        LETTER BODY
                    ================================================== */}

                    <div className="mt-10 space-y-6 font-serif text-lg leading-8 text-stone-700">

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.6,
                        }}
                      >
                        Wishing you a year as bright and full as you
                        make everyone around you feel. May this new
                        age bring you peace(me😌), laughter that comes
                        easy, and every good thing you've been
                        believing for.
                      </motion.p>

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1,
                        }}
                      >
                        You carry so much, your independence, your
                        heart for the people you love, I just pray it
                        all gets carried back to you. May God order
                        your steps, open doors you didn't even know
                        to knock on, and keep you exactly as sharp,
                        funny, stubborn and full of light as you are.
                      </motion.p>

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1.5,
                        }}
                      >
                        I hope this new chapter of your life brings
                        you happiness, beautiful memories, answered
                        prayers and everything your heart desires.
                      </motion.p>

                    </div>

                    {/* =================================================
                        SIGNATURE
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 2.2,
                      }}
                      className="mt-12 border-t border-stone-200 pt-8 text-center font-serif"
                    >

                      <p className="text-xl font-bold">
                        Happy birthday to the love of my life 🥰.
                        I'm lucky to have you.
                      </p>

                      <motion.p
                        animate={{
                          scale: [1, 1.03, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="mt-3 text-lg text-pink-500"
                      >
                        I love youuuuu. ❤️
                      </motion.p>

                    </motion.div>

                  </div>

                </motion.article>

                {/* Close */}

                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 2.5,
                  }}
                  type="button"
                  onClick={() => setOpened(false)}
                  className="mt-6 text-xs text-white/30 transition hover:text-white/60"
                >
                  Close letter
                </motion.button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

