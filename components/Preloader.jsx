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
        <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.65 }}>
          <motion.div className="preloaderInner" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55 }}>
            <span>KARIVO</span>
            <motion.i initial={{ width: 0 }} animate={{ width: 190 }} transition={{ duration: .8, delay: .18 }} />
            <small>Premium digitale Auftritte</small>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
