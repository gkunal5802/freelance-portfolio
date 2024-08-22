import { CONTACT } from "../constants";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section padding="20">
      <Heading padding="10">Get in Touch</Heading>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </Section>
  );
};

export default Contact;
