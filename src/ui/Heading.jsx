import { motion } from "framer-motion";

const Heading = ({ children }) => {
  return (
    <motion.h2
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-7xl pl-[120px]"
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
