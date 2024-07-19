import { HeroCards } from "./HeroCards";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true });
  const typingTexts = [
    "Global Affiliates Pro Networks Alliance.",
    "Join the Best Marketing Campaigns.",
    "Maximize Your Traffic Returns."
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="container overflow-x-hidden grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-green-0"
        initial={{ translateX: '-100%' }}
        animate={{ translateX: '0%' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="text-center lg:text-start space-y-6 relative z-10">
        {inView && (
          <motion.main
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="inline">
              <Typewriter
                words={typingTexts}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={5000}
              />
            </h1>
          </motion.main>
        )}

        {inView && (
          <motion.p
            className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Are you seeking lucrative returns for your traffic? Launch your
            Campaigns or SmartLink with us. Our team of seasoned managers is
            equipped to solve any optimization challenges you encounter in your
            marketing campaigns.
          </motion.p>
        )}

        {inView && (
          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button className="w-full md:w-1/3">
              <Link href="https://logicpulse.offer18.com/m/signup_self_aff?r=&am=" className="w-full h-full" target="blank"> Signup Now</Link>
            </Button>
          </motion.div>
        )}
      </div>
      <div className="z-10">
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] justify-center items-center">
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}>
              <HeroCards />
            </motion.div>
          )}
        </div>
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
