import { motion } from "framer-motion";
// import Image from "../assets/AboutImg1.JPG";
import Image from "../assets/AboutImg2.jpg";
import Image1 from "../assets/AboutImg3.jpg";
import Heading from "../ui/Heading";
import { ABOUT_ME } from "../constants";

const AboutMe = () => {
  return (
    <section className="mt-[256px] p-10">
      <Heading>
        Wanna Know My <br /> Story?
      </Heading>
      <div className="flex p-4 gap-2">
        {/* IMAGE COLUMN */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 h-[100%] px-10 pt-[40px] relative"
        >
          <img
            className="rounded-2xl "
            height="350px"
            width="250px"
            src={Image}
            alt="About image1"
          />
          <div
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: -100 }}
            // transition={{ duration: 0.5 }}
            className="absolute bottom-[-120px] right-[120px] z-index-2"
          >
            <img
              className="rounded-2xl mb-6 "
              height="250px"
              width="350px"
              src={Image1}
              alt="About image1"
            />
          </div>
        </motion.div>
        {/* DESCRIPTION COLUMN */}
        <div className="flex flex-col gap-10 p-4">
          {ABOUT_ME.map((el, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="font-semibold mb-2 text-md">{el.title}</h6>
              <p className="mb-4 text-gray-900 text-sm">{el.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
