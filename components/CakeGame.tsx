"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

type CakeOptions = {
  cake: string;
  frosting: string;
  decoration: string;
};

const cakeOptions = [
  {
    id: "vanilla",
    name: "Vanilla",
    emoji: "🍰",
    color: "from-[#f3d7a5] to-[#c99a58]",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    emoji: "🍫",
    color: "from-[#754634] to-[#3b2119]",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    emoji: "🍓",
    color: "from-[#ffb8c9] to-[#df7895]",
  },
];

const frostingOptions = [
  {
    id: "cream",
    name: "Vanilla Cream",
    emoji: "🤍",
    color: "from-[#fffdf8] to-[#e9ded2]",
  },
  {
    id: "pink",
    name: "Strawberry",
    emoji: "💗",
    color: "from-[#ffc5d7] to-[#ef8eac]",
  },
  {
    id: "purple",
    name: "Berry",
    emoji: "💜",
    color: "from-[#d9baff] to-[#a87bd6]",
  },
];

const decorationOptions = [
  {
    id: "strawberries",
    name: "Strawberries",
    emoji: "🍓",
  },
  {
    id: "flowers",
    name: "Flowers",
    emoji: "🌸",
  },
  {
    id: "sparkles",
    name: "Sparkles",
    emoji: "✨",
  },
  {
    id: "hearts",
    name: "Hearts",
    emoji: "❤️",
  },
];

export default function CakeGame() {
  const [options, setOptions] = useState<CakeOptions>({
    cake: "vanilla",
    frosting: "cream",
    decoration: "hearts",
  });

  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const selectedCake = cakeOptions.find(
    (item) => item.id === options.cake
  );

  const selectedFrosting = frostingOptions.find(
    (item) => item.id === options.frosting
  );

  const selectedDecoration = decorationOptions.find(
    (item) => item.id === options.decoration
  );

  const nextStep = () => {
    if (step < 2) {
      setStep((current) => current + 1);
    } else {
      setComplete(true);
    }
  };

  const reset = () => {
    setOptions({
      cake: "vanilla",
      frosting: "cream",
      decoration: "hearts",
    });

    setStep(0);
    setComplete(false);
  };

  return (
    <section
      id="cake"
      className="relative min-h-screen overflow-hidden bg-[#050509] px-6 py-32 text-white"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-pink-300/60">
            Birthday mini game
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Build your cake 🎂
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Every birthday needs a cake. 
          </p>
        </motion.div>

        {/* MAIN */}

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* =====================================================
              CAKE
          ====================================================== */}

          <div className="relative flex min-h-[540px] items-center justify-center">

            {/* Ground glow */}

            <div className="absolute bottom-16 h-24 w-[320px] rounded-full bg-pink-400/10 blur-3xl" />

            {/* Cake stage */}

            <div className="relative flex w-[330px] flex-col items-center">

              {/* =================================================
                  CANDLE
              ================================================== */}

              <div className="relative z-40 flex top-[15px] h-[62px] items-end justify-center">

                <div className="relative h-[45px] w-[9px] rounded-t-md bg-gradient-to-r from-pink-200 via-white to-pink-300">

                  <div className="absolute left-[2px] top-0 h-full w-[2px] bg-pink-300/30" />

                </div>

                <motion.div
                  animate={{
                    y: [0, -3, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 text-xl"
                >
                  🔥
                </motion.div>

              </div>

              {/* =================================================
                  TOP ICING + TOPPINGS
                  THIS ENTIRE BLOCK SITS ON THE CAKE
              ================================================== */}

              <motion.div
                layout
                className="relative z-30 h-[78px] w-[260px]"
              >

                {/* TOPPINGS */}

                <div className="pointer-events-none absolute top-[19px] left-0 z-50 flex w-full items-end justify-around px-7">

                  {selectedDecoration?.id === "hearts" && (
                    <>
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="text-xl"
                      >
                        ❤️
                      </motion.span>

                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                        }}
                        className="text-2xl"
                      >
                        ❤️
                      </motion.span>

                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                        }}
                        className="text-xl"
                      >
                        ❤️
                      </motion.span>
                    </>
                  )}

                  {selectedDecoration?.id === "flowers" && (
                    <>
                      <span className="text-xl">🌸</span>
                      <span className="text-2xl">🌸</span>
                      <span className="text-xl">🌸</span>
                    </>
                  )}

                  {selectedDecoration?.id === "strawberries" && (
                    <>
                      <span className="text-xl">🍓</span>
                      <span className="text-2xl">🍓</span>
                      <span className="text-xl">🍓</span>
                    </>
                  )}

                  {selectedDecoration?.id === "sparkles" && (
                    <>
                      <span className="text-xl">✨</span>
                      <span className="text-2xl">✨</span>
                      <span className="text-xl">✨</span>
                    </>
                  )}

                </div>

                {/* ICING */}

                <div
                  className={`absolute bottom-0 left-1/2 h-[65px] w-[260px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b ${selectedFrosting?.color} shadow-[0_8px_25px_rgba(0,0,0,0.25)]`}
                >

                  {/* Icing front edge */}

                  <div
                    className={`absolute bottom-[-10px] left-1/2 h-[28px] w-[230px] -translate-x-1/2 rounded-b-[45%] bg-gradient-to-b ${selectedFrosting?.color}`}
                  />

                  {/* Icing drips */}

                  <div
                    className={`absolute bottom-[-30px] left-[35px] h-[25px] w-[27px] rounded-b-full bg-gradient-to-b ${selectedFrosting?.color}`}
                  />

                  <div
                    className={`absolute bottom-[-40px] left-[92px] h-[32px] w-[30px] rounded-b-full bg-gradient-to-b ${selectedFrosting?.color}`}
                  />

                  <div
                    className={`absolute bottom-[-34px] right-[75px] h-[25px] w-[27px] rounded-b-full bg-gradient-to-b ${selectedFrosting?.color}`}
                  />

                  <div
                    className={`absolute bottom-[-34px] right-[28px] h-[30px] w-[27px] rounded-b-full bg-gradient-to-b ${selectedFrosting?.color}`}
                  />

                </div>

              </motion.div>

              {/* =================================================
                  CAKE BODY
              ================================================== */}

              <motion.div
                layout
                className={`relative z-10 -mt-[2px] h-[125px] w-[235px] rounded-b-[30px] bg-gradient-to-b ${selectedCake?.color} shadow-[0_25px_45px_rgba(0,0,0,0.35)]`}
              >

                {/* Cake side highlight */}

                <div className="absolute left-5 top-5 h-16 w-2 rounded-full bg-white/10 blur-sm" />

                {/* Small decorative dots */}

                <div className="absolute left-0 right-0 top-[55px] flex justify-around px-8 text-white/20">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </div>

              </motion.div>

              {/* =================================================
                  PLATE
              ================================================== */}

              <div className="relative z-0 -mt-[2px] flex flex-col items-center">

                <div className="h-[15px] w-[300px] rounded-[50%] border border-white/10 bg-white/[0.10] shadow-2xl" />

                <div className="h-[9px] w-[220px] rounded-b-full bg-white/[0.04]" />

              </div>

            </div>
          </div>

          {/* =====================================================
              CONTROLS
          ====================================================== */}

          <div>

            {/* PROGRESS */}

            <div className="mb-10">

              <div className="mb-3 flex justify-between text-xs text-white/30">
                <span>
                  Step {step + 1} of 3
                </span>

                <span>
                  {Math.round(((step + 1) / 3) * 100)}%
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  animate={{
                    width: `${((step + 1) / 3) * 100}%`,
                  }}
                  className="h-full rounded-full bg-pink-300"
                />

              </div>

            </div>

            {!complete ? (
              <AnimatePresence mode="wait">

                {/* CAKE */}

                {step === 0 && (
                  <motion.div
                    key="cake"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >

                    <h3 className="text-2xl font-bold">
                      Choose your cake
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      What kind of cake do you want?
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-3">

                      {cakeOptions.map((cake) => (
                        <button
                          key={cake.id}
                          onClick={() =>
                            setOptions((current) => ({
                              ...current,
                              cake: cake.id,
                            }))
                          }
                          className={`rounded-2xl border p-4 transition ${
                            options.cake === cake.id
                              ? "border-pink-300/60 bg-pink-300/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >

                          <div className="text-4xl">
                            {cake.emoji}
                          </div>

                          <p className="mt-2 text-xs text-white/60">
                            {cake.name}
                          </p>

                        </button>
                      ))}

                    </div>

                  </motion.div>
                )}

                {/* FROSTING */}

                {step === 1 && (
                  <motion.div
                    key="frosting"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >

                    <h3 className="text-2xl font-bold">
                      Choose your frosting
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      Pick the icing for your cake.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-3">

                      {frostingOptions.map((frosting) => (
                        <button
                          key={frosting.id}
                          onClick={() =>
                            setOptions((current) => ({
                              ...current,
                              frosting: frosting.id,
                            }))
                          }
                          className={`rounded-2xl border p-4 transition ${
                            options.frosting === frosting.id
                              ? "border-pink-300/60 bg-pink-300/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >

                          <div className="text-4xl">
                            {frosting.emoji}
                          </div>

                          <p className="mt-2 text-xs text-white/60">
                            {frosting.name}
                          </p>

                        </button>
                      ))}

                    </div>

                  </motion.div>
                )}

                {/* DECORATIONS */}

                {step === 2 && (
                  <motion.div
                    key="decoration"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >

                    <h3 className="text-2xl font-bold">
                      Decorate it
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      Put the finishing touch on Winnie's cake.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">

                      {decorationOptions.map((decoration) => (
                        <button
                          key={decoration.id}
                          onClick={() =>
                            setOptions((current) => ({
                              ...current,
                              decoration: decoration.id,
                            }))
                          }
                          className={`rounded-2xl border p-5 text-left transition ${
                            options.decoration === decoration.id
                              ? "border-pink-300/60 bg-pink-300/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >

                          <span className="text-3xl">
                            {decoration.emoji}
                          </span>

                          <span className="ml-3 text-sm text-white/60">
                            {decoration.name}
                          </span>

                        </button>
                      ))}

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>
            ) : (

              /* COMPLETE */

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="rounded-3xl border border-pink-300/20 bg-pink-300/[0.05] p-8"
              >

                <div className="text-5xl">
                  🎉
                </div>

                <h3 className="mt-5 text-3xl font-black">
                  Your cake is ready!
                </h3>

                <p className="mt-5 font-semibold text-pink-200">
                  Now close your eyes and make a wish. ✨
                </p>

              </motion.div>
            )}

            {/* BUTTON */}

            <div className="mt-8 flex gap-3">

              {!complete && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={nextStep}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pink-300/15 px-6 py-4 text-sm font-semibold text-pink-100"
                >

                  {step === 2 ? (
                    <>
                      Finish cake
                      <Sparkles size={16} />
                    </>
                  ) : (
                    <>
                      Continue
                      <Check size={16} />
                    </>
                  )}

                </motion.button>
              )}

              {complete && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={reset}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 text-sm font-semibold"
                >
                  <RotateCcw size={16} />
                  Make another
                </motion.button>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}