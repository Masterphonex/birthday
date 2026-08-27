"use client";

import { motion } from "framer-motion";
import {
  Cake,
  Gamepad2,
  Heart,
  Home,
  Images,
  Mail,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    id: "hero",
    label: "Home",
    icon: Home,
  },
  {
    id: "letter",
    label: "Letter",
    icon: Mail,
  },
  {
    id: "memories",
    label: "Memories",
    icon: Images,
  },
  {
    id: "cake",
    label: "Cake",
    icon: Cake,
  },
  {
    id: "memory-game",
    label: "Game",
    icon: Gamepad2,
  },
  {
    id: "wish",
    label: "Wish",
    icon: Sparkles,
  },
  {
    id: "final",
    label: "Finale",
    icon: Heart,
  },
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
        duration: 0.6,
      }}
      className="fixed bottom-5 left-1/2 z-[90] -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/50 p-2 shadow-2xl backdrop-blur-2xl">

        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-label={section.label}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/35 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >

              <Icon size={16} />

              {/* Tooltip */}

              <span className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-3 py-1.5 text-[10px] text-white/70 opacity-0 backdrop-blur-xl transition-opacity duration-200 group-hover:opacity-100">
                {section.label}
              </span>

            </button>
          );
        })}

      </div>
    </motion.nav>
  );
}