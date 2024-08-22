import Arrow from "../ui/Arrow";
import Drone from "../assets/drone.png";

import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const droneVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center lg:items-start w-full">
          <div className="mx-20 px-20 w-3/4 relative">
            <motion.h1
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-7xl font-medium tracking-tight lg:text-8xl lg:mt-16"
            >
              I make some of the best Videos your audience can ever see!
            </motion.h1>
          </div>
          <div className="absolute top-[256px] right-5">
            <motion.img
              variants={droneVariants(1)}
              initial="initial"
              animate="animate"
              src={Drone}
              alt="drone img"
              width="512px"
              height="512px"
            />
          </div>
          <motion.button
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mx-[360px] mt-[-40px] "
          >
            <div className="hover:bg-red-400 hover:border-b-[8px] transition flex gap-4 rounded-full border-2 border-b-[16px] border-black py-4 px-10 text-black tracking-tight">
              <span className="pt-1 text-xl">
                Explore a showcase of my professional work
              </span>
              <Arrow />
            </div>
          </motion.button>
          <div className="mx-24 max-w-2xl">
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-12 py-6 text-xl text-black tracking-light w-full font-[400]"
            >
              I manage every aspect of social media—from ideation and shooting
              to editing, management, and content writing—ensuring your brand
              stands out and thrives online!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
