import { useEffect, useRef } from "react";

function CometBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ==========================
    // CANVAS SETUP
    // ==========================
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // ==========================
    // COMETS CONFIGURATION
    // ==========================
    const comets = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        vx: 2.4,
        vy: 1.8,
        radius: 5,
        color: "rgb(189, 177, 111)", // Elegant muted gold
        trail: [],
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.7,
        vx: -2.2,
        vy: -2.6,
        radius: 5,
        color: "rgb(189, 177, 111)",
        trail: [],
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.2,
        vx: 3.0,
        vy: -1.5,
        radius: 5,
        color: "rgb(189, 177, 111)",
        trail: [],
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.8,
        vx: -2.6,
        vy: 2.2,
        radius: 5,
        color: "rgb(189, 177, 111)",
        trail: [],
      },
    ];    const maxTrailLength = 45;
    const glowStrength = 20;
    let animationId;

    // ==========================
    // ANIMATION LOOP
    // ==========================
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Clear screen with pure black (#000000) for consistency
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw each comet
      comets.forEach((comet) => {
        // Move comet
        comet.x += comet.vx;
        comet.y += comet.vy;

        // Bounce logic (perfect reflection)
        if (comet.x - comet.radius <= 0 || comet.x + comet.radius >= canvas.width) {
          comet.vx *= -1;
        }

        if (comet.y - comet.radius <= 0 || comet.y + comet.radius >= canvas.height) {
          comet.vy *= -1;
        }

        // Store trail history
        comet.trail.push({ x: comet.x, y: comet.y });
        if (comet.trail.length > maxTrailLength) comet.trail.shift();

        // ==========================
        // DRAW COMET TAIL
        // ==========================
        for (let i = 0; i < comet.trail.length; i++) {
          const point = comet.trail[i];
          const progress = i / comet.trail.length;

          const radius = progress * comet.radius;
          const opacity = progress;
          const glow = (1 - progress) * glowStrength;

          ctx.shadowBlur = glow;
          ctx.shadowColor = comet.color;

          ctx.beginPath();
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(189, 177, 111, ${opacity})`;
          ctx.fill();
        }

        // ==========================
        // DRAW COMET HEAD
        // ==========================
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2);
        ctx.fillStyle = comet.color;
        ctx.fill();
      });
    };    animate();

    // ==========================
    // CLEANUP
    // ==========================
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#000000", // Pure black for consistency
        zIndex: -1, // stays behind content
      }}
    />
  );
}

export default CometBackground;