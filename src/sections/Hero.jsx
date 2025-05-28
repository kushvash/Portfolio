import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";
import MouseScroll from "../components/MouseScroll";
import { socialLinks } from "../constants/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [waveTrigger, setWaveTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTrigger(true);
      setTimeout(() => setWaveTrigger(false), 1000);
    }, 4000); //Wave every 4 seconds.

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col relative items-center justify-center px-4"
        id="home"
      >
        <div className="max-w-7xl mx-auto flex flex-col c-space gap-7 items-center">
          <h2 className="md:text-5xl sm:text-4xl text-2xl font-medium text-white text-center">
            Hi, I am{" "}
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Kush
            </LinearGradient>
          </h2>
          <h2
            className=" text-center text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal relative w-[max-content]
before:absolute before:inset-0 before:animate-typewriter before:bg-[#1a191e]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white"
          >
            Software Developer
          </h2>

          <p className="max-w-4xl text-center justify-center text-white xl:text-xl md:text-lg sm:text-sm text-md">
            I&apos;m a passionate software developer with expertise in web and
            game development using JavaScript, TypeScript, C#, and Unity. I
            build interactive experiences and web applications, leveraging both
            front-end and back-end technologies. With a strong focus on clean
            code, collaboration, and continuous learning, I strive to create
            innovative solutions that enhance user experiences.
          </p>
        </div>
        <motion.div
          className="flex flex-row gap-4 justify-center mt-10 max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                waveTrigger
                  ? {
                      y: [0, -10, 0], //Wave motion.
                      transition: {
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
            >
              <SocialIcon className="heroIcon" url={link.url} />
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-5">
          <MouseScroll />
        </div>
      </section>
    </>
  );
};

export default Hero;
