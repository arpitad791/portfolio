import { motion } from "framer-motion";
import { styles } from "../styles";
import Lottie from "lottie-react";
import programmerGirl from "../assets/programmer.json";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-white to-pink-100 dark:from-slate-900 dark:to-black">
      {/* Text & Dot Line */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] sm:top-[130px] mx-auto max-w-7xl flex flex-col sm:flex-row  items-start gap-6`}
      >
        {/* Left Dot Line */}
        <div className="flex flex-row sm:flex-col justify-center items-center sm:mt-5 gap-2 sm:gap-0">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-pink-500" />
          <div className="w-1 h-20 sm:h-80 bg-gradient-to-b from-pink-500 to-transparent" />
        </div>

        {/* Heading + Text */}
        <div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-black leading-tight">
            Hi, I'm{" "}
            <span className="text-pink-500 dark:text-pink-400">Arpita</span>
          </h1>
          <p className="mt-4 text-base xs:text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
            Full-stack Developer building elegant & scalable Web Applications
            using React, Next.js, PostgreSQL & more.
          </p>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="absolute bottom-[-80px] sm:bottom-0 w-full flex justify-center items-end h-[36%] sm:h-[55%]">
        <Lottie
          animationData={programmerGirl}
          className="w-[80%] sm:w-[400px] md:w-[500px] "
          loop
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[30px] h-[60px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-gray-700 dark:border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-700 dark:bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
