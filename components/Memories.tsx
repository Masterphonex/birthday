"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

const memories = [
  {
    title: "So Innocent",
    date: "The innocent winnie",
    text: "see the way she looks so innocent, but i can already see small stubborness in her eyes sha 🥱😂",
    image: "/images/memory-1.jpg",
    // fallback: "🌷",
  },
  {
    title: "A beautiful day",
    date: "My Smilling Baby",
    text: "See the way she dey shine teeth😂😂",
    image: "/images/memory-2.jpg",
    // fallback: "😂",
  },
  {
    title: "Caught unaware",
    date: "Winnie and the chicken 😂",
    text: "The way you were enjoying that chicken ehh, Hope it was to your taste  ",
    image: "/images/memory-3.jpg",
    // fallback: "❤️",
  },
  {
    title: "so cute",
    date: "Hot Baby",
    text: "The day she forgot about me 🥱, aside that see the way my baby is fine and the pic is very clear sef , which phone?, already asked here so i didnt ask again on chat 😂.",
    image: "/images/memory-4.jpg",
    // fallback: "✨",
  },
];

export default function Memories() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? memories.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === memories.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="memories"
      className="relative min-h-screen overflow-hidden bg-[#050509] px-6 py-32 text-white"
    >
      {/* Background */}
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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-pink-300/60">
            Little pieces of my baby
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            My baby 📸
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
           Some cute pics of sweet and stubborn baby
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Cards */}
          <div className="relative flex h-[560px] items-center justify-center">

            {memories.map((memory, index) => {
              const offset = index - active;

              return (
                <motion.div
                  key={memory.title}
                  animate={{
                    x: offset * 180,
                    scale: offset === 0 ? 1 : 0.82,
                    rotateY: offset * -12,
                    rotateZ: offset * 4,
                    opacity:
                      Math.abs(offset) > 2
                        ? 0
                        : offset === 0
                          ? 1
                          : 0.45,
                    zIndex: memories.length - Math.abs(offset),
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute w-[290px] md:w-[370px]"
                  style={{
                    perspective: "1200px",
                  }}
                >
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116] p-3 shadow-2xl">

                    {/* Image */}
                    <div className="relative h-[330px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-pink-500/10 to-purple-500/10">

                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      {/* Placeholder */}
                      {/* <div className="absolute inset-0 -z-0 flex items-center justify-center text-7xl">
                        {memory.fallback}
                      </div> */}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 flex items-center gap-2">
                        <Heart
                          size={15}
                          fill="currentColor"
                          className="text-pink-300"
                        />

                        <span className="text-xs text-white/70">
                          memory #{index + 1}
                        </span>
                      </div>

                    </div>

                    {/* Text */}
                    <div className="px-4 pb-5 pt-5 text-left">

                      <p className="text-[10px] uppercase tracking-[0.3em] text-pink-300/50">
                        {memory.date}
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        {memory.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/40">
                        {memory.text}
                      </p>

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-pink-300"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl"
            >
              <ChevronRight size={20} />
            </motion.button>

          </div>

        </div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-sm text-white/25"
        >
          More memories are waiting to be made. ❤️
        </motion.p>

      </div>
    </section>
  );
}