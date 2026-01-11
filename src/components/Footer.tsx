"use client";
import { WavyBackground } from "../components/ui/wavy-background";

export function WavyBackgroundDemo() {
      const currentYear = new Date().getFullYear();

  return (
    <div className="mt-10 border-t overflow-hidden">
        <footer className="relative w-screen h-[280px] mt-5">
      <WavyBackground containerClassName="h-full w-full">
        <p className="pt-24 text-center text-sm ">
          ©  {currentYear} Bomo~X All rights reserved
        </p>
      </WavyBackground>
    </footer>
    </div>
  );
}
