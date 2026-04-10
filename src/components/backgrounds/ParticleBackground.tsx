"use client";

import { memo, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const COLORS = [
  "rgba(0, 255, 136, 0.7)",
  "rgba(255, 105, 180, 0.7)",
  "rgba(50, 255, 150, 0.7)",
  "rgba(255, 0, 255, 0.7)",
  "rgba(0, 245, 212, 0.6)",
  "rgba(0, 210, 190, 0.5)",
];

const MAX_DISTANCE = 150;

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const createParticles = () => {
      const particleCount = Math.floor(
        (canvas.width * canvas.height) / 15000
      );
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const animate = () => {
      ctx.fillStyle = "#0a0b0d";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
            const opacity = (1 - Math.sqrt(distSq) / MAX_DISTANCE) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}

export default memo(ParticleBackground);
