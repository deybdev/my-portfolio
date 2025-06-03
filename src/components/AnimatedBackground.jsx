import { useEffect, useRef } from "react";
import styles from "./AnimatedBackground.module.css";

const NUM_BUBBLES = 100;

const AnimatedBackground = () => {
  const bubblesRef = useRef([]);
  const positions = useRef([]);
  const velocities = useRef([]);

  useEffect(() => {
    positions.current = Array.from({ length: NUM_BUBBLES }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    velocities.current = Array.from({ length: NUM_BUBBLES }, () => ({
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {
      for (let i = 0; i < NUM_BUBBLES; i++) {
        const bubble = bubblesRef.current[i];
        const pos = positions.current[i];
        const vel = velocities.current[i];

        pos.x += vel.x;
        pos.y += vel.y;

        // Bounce off edges
        if (pos.x < 0 || pos.x > window.innerWidth) vel.x *= -1;
        if (pos.y < 0 || pos.y > window.innerHeight) vel.y *= -1;

        if (bubble) {
          bubble.style.left = `${pos.x}px`;
          bubble.style.top = `${pos.y}px`;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={styles.background}>
      {Array.from({ length: NUM_BUBBLES }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          className={styles.bubble}
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: "0px",
            top: "0px",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
