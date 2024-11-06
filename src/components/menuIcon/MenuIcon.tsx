import { motion } from "framer-motion";
import { useStore } from "../../zustand/store";

export default function MenuIcon() {
  // Zustand
  const toggleMenu = useStore((state) => state.toggleMenu);
  const menu = useStore((state) => state.menu);

  const top = {
    active: {
      y: 0,
    },
    hidden: { y: 10, rotate: -45, transition: { delay: 0.2 } },
  };

  const middle = {
    active: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const bottom = {
    active: {
      y: 0,
    },
    hidden: { y: -5, rotate: 45, transition: { delay: 0.2 } },
  };

  return (
    <div
      className="w-8 h-5 flex flex-col justify-between cursor-pointer"
      onClick={toggleMenu}
    >
      <motion.div
        animate={`${menu ? "hidden" : "active"}`}
        variants={top}
        className="w-full h-1 bg-black rounded-md"
      ></motion.div>
      <motion.div
        animate={`${menu ? "hidden" : "active"}`}
        variants={middle}
        className="w-full h-1 bg-black rounded-md"
      ></motion.div>
      <motion.div
        animate={`${menu ? "hidden" : "active"}`}
        variants={bottom}
        className="w-full h-1 bg-black rounded-md"
      ></motion.div>
    </div>
  );
}
