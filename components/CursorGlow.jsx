import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    function move(event) {
      x.set(event.clientX - 230);
      y.set(event.clientY - 230);
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return <motion.div className="cursorGlow" style={{ x: smoothX, y: smoothY }} />;
}
