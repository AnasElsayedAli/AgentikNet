import { useEffect, useRef } from "react";

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class representing connection nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];
    const maxParticles = Math.min(100, Math.floor((width * height) / 12000));
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, active: false };

    // Initialize particles with variations in coordinates and vectors
    for (let i = 0; i < maxParticles; i++) {
      const isElectricBlue = Math.random() > 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: isElectricBlue ? "rgba(0, 191, 255, 0.45)" : "rgba(138, 43, 226, 0.45)",
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background ambient grids
      ctx.strokeStyle = "rgba(255, 255, 255, 0.006)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Magnetic attraction to user's cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 2500;
            p.vx += (dx / dist) * force * 0.15;
            p.vy += (dy / dist) * force * 0.15;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Friction to cap speeds
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Add slight persistent drift back to keep nodes moving
        if (Math.abs(p.vx) < 0.05) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.05) p.vy += (Math.random() - 0.5) * 0.1;

        // Screen boundary rebound physics
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Draw node center glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Calculate and draw line linkages between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            // Mixed connection line colors
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color.replace("0.45", alpha.toString()));
            grad.addColorStop(1, p2.color.replace("0.45", alpha.toString()));

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="neural-network-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-transparent block w-full h-full"
    />
  );
}
export default NetworkCanvas;
