import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        style={{ overflowX: "hidden", backgroundColor: "black" }}
        id={idName} // Ensure id is set here
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
