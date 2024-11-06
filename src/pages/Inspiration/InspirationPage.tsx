import inspirationModel1 from "../../assets/white-t-shirt-model1.png";
import inspirationModel2 from "../../assets/white-t-shirt-model2.png";
import inspirationModel3 from "../../assets/white-t-shirt-model3.png";
import inspirationModel4 from "../../assets/photo-t-shirts.jpg";
import inspirationModel5 from "../../assets/black-sweatpants.png";
import inspirationModel6 from "../../assets/production-white-t-shirt.jpg";
import inspirationModel7 from "../../assets/adoreclo_video_frame.jpg";
import inspirationModel8 from "../../assets/black-bag-preview1.png";
import instagramIcon from "../../assets/instagram_logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type scrollBehaviorOptions = "auto" | "smooth";

// Scroll to top
const scrollToTop = (top: number, behavior: scrollBehaviorOptions): void => {
  document.documentElement.scrollTo({
    top: top,
    behavior: behavior,
  });
};

export default function InspirationPage() {
  const [scrollStatus, setScrollStatus] = useState<boolean>(false);

  const scaleIn = {
    inView: {
      scale: 1,
      transition: { duration: 0.5 },
    },
    notInView: {
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      let scrollStartPos: number = window.scrollY;

      if (scrollStartPos > 0) {
        setScrollStatus(true);
      } else {
        setScrollStatus(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return (): void => document.removeEventListener("scroll", handleScroll);
  }, [setScrollStatus]);

  return (
    <main className="h-auto w-full font-lato flex flex-col items-center pt-32 px-3 md:w-1/2 md:self-center">
      <h2 className="font-semibold text-xl lg:text-3xl">
        Discover How Others Wear It!
      </h2>
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel1}
        alt="Inspiration"
        className="w-1/2 self-start mt-10 rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel6}
        alt="Inspiration"
        className="w-1/2 self-end mt-2 rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel3}
        alt="Inspiration"
        className="w-1/2 mt-2 rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel2}
        alt="Inspiration"
        className="w-1/2 mt-2 self-end rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel7}
        alt="Inspiration"
        className="w-1/2 mt-2 self-start rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel4}
        alt="Inspiration"
        className="w-1/2 mt-2 rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel5}
        alt="Inspiration"
        className="w-1/2 mt-2 self-end rounded-sm shadow-xl"
      />
      <motion.img
        variants={scaleIn}
        initial="notInView"
        whileInView="inView"
        src={inspirationModel8}
        alt="Inspiration"
        className="w-1/2 mt-2 self-start rounded-sm shadow-xl"
      />

      <div className="w-full border-t border-gray-300 h-40 mt-10 flex flex-col items-center justify-between py-4">
        <h3 className="text-sm md:text-lg">
          Do you also want be a part of the inspiration?
        </h3>
        <p className="font-medium">Follow and tag us on Instagram</p>
        <Link to={"https://www.instagram.com/adoreclo_/"} target="_blank">
          <img src={instagramIcon} alt="Instagram logo" className="w-10" />
        </Link>
      </div>
      {/* Scroll to top button */}
      <div
        className="fixed bottom-16 right-10 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer animate-bounce bg-black shadow-md "
        onClick={() => scrollToTop(0, "smooth")}
      >
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${scrollStatus ? "-rotate-90" : "rotate-90"}`}
        >
          <path
            d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5L10 4.5V3.5L0 3.5L0 4.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    </main>
  );
}
