"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Trophy, Heart } from "lucide-react";
import { useEffect, useState } from "react";

type Card = {
  id: number;
  symbol: string;
  matched: boolean;
};

const symbols = ["❤️", "🌸", "🧸", "✨", "🍓", "💋"];

const createCards = (): Card[] => {
  const cards = [...symbols, ...symbols]
    .map((symbol, index) => ({
      id: index,
      symbol,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

  return cards;
};

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(createCards);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [won, setWon] = useState(false);

  const restart = () => {
    setCards(createCards());
    setFlipped([]);
    setMoves(0);
    setLocked(false);
    setWon(false);
  };

  const handleCardClick = (index: number) => {
    if (locked || flipped.includes(index) || cards[index].matched) {
      return;
    }

    if (flipped.length === 2) {
      return;
    }

    const newFlipped = [...flipped, index];

    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((current) => current + 1);
    }
  };

  useEffect(() => {
    if (flipped.length !== 2) return;

    const [first, second] = flipped;

    if (cards[first].symbol === cards[second].symbol) {
      setCards((current) =>
        current.map((card, index) =>
          index === first || index === second
            ? { ...card, matched: true }
            : card
        )
      );

      setTimeout(() => {
        setFlipped([]);
      }, 500);
    } else {
      setLocked(true);

      setTimeout(() => {
        setFlipped([]);
        setLocked(false);
      }, 900);
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setWon(true);
      }, 700);
    }
  }, [cards]);

  return (
    <section
      id="memory-game"
      className="relative min-h-screen overflow-hidden bg-[#050509] px-6 py-32 text-white"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.15, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[150px]"
        />

      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Header */}

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
          className="text-center"
        >

          <p className="text-xs uppercase tracking-[0.45em] text-pink-300/60">
            Another little game
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Find the love ❤️
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Match all the cards👀
          </p>

        </motion.div>

        {/* Stats */}

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-center backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Moves
            </p>

            <p className="mt-1 text-xl font-bold">
              {moves}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-center backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Pairs
            </p>

            <p className="mt-1 text-xl font-bold">
              {cards.filter((card) => card.matched).length / 2}
              <span className="text-white/20">/6</span>
            </p>

          </div>

        </div>

        {/* Game board */}

        <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">

          {cards.map((card, index) => {

            const isFlipped =
              flipped.includes(index) || card.matched;

            return (
              <motion.button
                key={card.id}
                whileHover={!isFlipped ? { scale: 1.04 } : undefined}
                whileTap={!isFlipped ? { scale: 0.95 } : undefined}
                onClick={() => handleCardClick(index)}
                className="relative aspect-square [perspective:800px]"
              >

                <motion.div
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >

                  {/* CARD BACK */}

                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl [backface-visibility:hidden]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-300/10 bg-pink-300/[0.04]">

                      <Heart
                        size={17}
                        className="text-pink-300/40"
                      />

                    </div>

                  </div>

                  {/* CARD FRONT */}

                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-pink-300/20 bg-pink-300/[0.07] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">

                    <motion.span
                      initial={{
                        scale: 0.5,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="text-3xl sm:text-4xl"
                    >
                      {card.symbol}
                    </motion.span>

                  </div>

                </motion.div>

              </motion.button>
            );
          })}

        </div>

        {/* Restart */}

        <div className="mt-10 flex justify-center">

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={restart}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/60 transition hover:bg-white/[0.08]"
          >

            <RotateCcw size={15} />

            Restart game

          </motion.button>

        </div>

      </div>

      {/* WIN SCREEN */}

      <AnimatePresence>

        {won && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="w-full max-w-md rounded-[2rem] border border-pink-300/20 bg-[#111116] p-10 text-center shadow-2xl"
            >

              {/* Trophy */}

              <motion.div
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="flex justify-center"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-300/10">

                  <Trophy
                    size={38}
                    className="text-pink-200"
                  />

                </div>

              </motion.div>

              <h3 className="mt-6 text-3xl font-black">
                You did it! 🎉
              </h3>

              <p className="mt-4 leading-7 text-white/40">
                You found all the matches.❤️
                <br />
              
              </p>

              <p className="mt-5 text-sm text-pink-200/70">
                Completed in {moves} moves.
              </p>

              <div className="mt-7 flex justify-center gap-2 text-2xl">
                ❤️ ✨ ❤️ ✨ ❤️
              </div>

              <button
                onClick={restart}
                className="mt-8 rounded-full bg-pink-300/10 px-7 py-3 text-sm font-semibold text-pink-100 transition hover:bg-pink-300/20"
              >
                Play again
              </button>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}