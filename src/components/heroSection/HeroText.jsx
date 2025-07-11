import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";
import { FaDev } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center relative font-poppins">
      {/* Background Glow */}
      <div className="absolute w-[200px] h-[200px] bg-orange-500 blur-3xl opacity-30 rounded-full top-10 left-10 animate-ping z-0" />

      {/* Role */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey z-10 font-semibold tracking-widest"
      >
        Full-Stack Developer
      </motion.h2>

      {/* Name with Typewriter */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase 
                   bg-gradient-to-r from-orange-400 to-yellow-300 
                   bg-clip-text text-transparent animate-pulse z-10 font-raleway"
      >
        <Typewriter
          words={['Anurag Kuche']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
        />
      </motion.h1>

      {/* Font icon like Dev.to */}
<motion.div
  variants={fadeIn("right", 0.6)}
  initial="hidden"
  whileInView="show"
  className="text-white text-2xl flex justify-center md:justify-start gap-3 mt-1 z-10"
>
  <a
    href="https://github.com/Anurag-Kuche"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-400 transition"
  >
    <FaDev />
  </a>
</motion.div>


      {/* Cursive Personal Tagline */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl font-vibes text-orange-300 mt-6"
      >
        Turning ideas into real-world web magic ✨
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="text-lg mt-2 text-white/80 leading-relaxed z-10"
      >
        A Passionate Web Developer,<br />
        skilled in React, MERN stack, and problem-solving,
      </motion.p>
    </div>
  );
};

export default HeroText;
