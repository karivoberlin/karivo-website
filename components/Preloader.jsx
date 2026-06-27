import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1050);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.65 }}>
          <motion.div className="preloaderInner" initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.65 }}>
            <span>KARIVO</span>
            <motion.i initial={{ width: 0 }} animate={{ width: 180 }} transition={{ duration: 0.8, delay: 0.15 }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
