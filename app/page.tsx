import Hero from "@/components/Hero";
import LoveLetter from "@/components/LoveLetter";
import Memories from "@/components/Memories";
import CakeGame from "@/components/CakeGame";
import MemoryGame from "@/components/MemoryGame";
import MakeAWish from "@/components/Wish";
import FinalScene from "@/components/FinalScene";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="bg-[#050509]">

      <Navigation />

      <Hero />

      <LoveLetter />

      <Memories />

      <CakeGame />

      <MemoryGame />

      <MakeAWish />

      <FinalScene />

    </main>
  );
}