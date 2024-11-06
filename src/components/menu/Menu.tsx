import { Link } from "react-router-dom";
import { useStore } from "../../zustand/store";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Menu() {
  // Zustand
  const menu = useStore((state) => state.menu);
  const toggleMenu = useStore((state) => state.toggleMenu);
  // UseState
  const [isVisible, setIsVisible] = useState<boolean>(menu);

  // Creates a delay when toggling the sidebar and handle overflow.
  useEffect(() => {
    if (menu) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [menu]);

  const menuAnimation = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  // Close Sidebar when navigating
  const handleClick = (): void => {
    toggleMenu();
  };

  return (
    <motion.nav
      initial="closed"
      animate={menu ? "open" : "closed"}
      exit="closed"
      variants={menuAnimation}
      className={`${
        isVisible ? "fixed" : "hidden"
      } w-screen h-full top-0 left-0 flex items-center justify-center bg-white origin-right z-40`}
    >
      <ul className="h-1/2 w-auto flex flex-col justify-between items-start select-none">
        <motion.li className="text-4xl font-semibold" onClick={handleClick}>
          <Link to="/" viewTransition>
            Home
          </Link>
        </motion.li>
        <motion.li className="text-4xl font-semibold" onClick={handleClick}>
          <Link to="/products">Products</Link>
        </motion.li>
        <motion.li className="text-4xl font-semibold" onClick={handleClick}>
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li className="text-4xl font-semibold" onClick={handleClick}>
          <Link to="/inspiration">Inspiration</Link>
        </motion.li>
        <motion.li className="text-4xl font-semibold" onClick={handleClick}>
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}
