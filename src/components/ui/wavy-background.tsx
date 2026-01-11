"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "transparent",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.4,
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const noise = createNoise3D();

  let ctx: CanvasRenderingContext2D | null = null;
  let w = 0;
  let h = 0;
  let nt = 0;
  let animationId = 0;

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const resize = () => {
    if (!canvasRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    w = canvasRef.current.width = rect.width;
    h = canvasRef.current.height = rect.height;

    ctx = canvasRef.current.getContext("2d");
    if (ctx) ctx.filter = `blur(${blur}px)`;
  };

  const drawWave = (count: number) => {
    if (!ctx) return;

    nt += getSpeed();

    for (let i = 0; i < count; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x <= w; x += 5) {
        const y = noise(x / 800, i * 0.3, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }

      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    if (!ctx) return;

    ctx.globalAlpha = waveOpacity;
    ctx.fillStyle = backgroundFill;
    ctx.fillRect(0, 0, w, h);

    drawWave(5);

    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    resize();
    render();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />

      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
