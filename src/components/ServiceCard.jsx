import { motion } from "framer-motion";

const iconVariants = (duration) => ({
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

const ServiceCard = ({ delay, title, image }) => {
  return (
    <motion.div
      variants={iconVariants(delay)}
      initial="initial"
      animate="animate"
      className="w-[256px] h-[256px] text-center text-3xl text-wrap flex flex-col border-2 border-black rounded-3xl shadow-md shadow-gray-900"
    >
      <img
        width="175px"
        height="175px"
        src={image}
        alt={title}
        className="mx-auto"
      />
      <p className="text-wrap">{title}</p>
    </motion.div>
  );
};

export default ServiceCard;
