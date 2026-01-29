import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import MyPicture from "../../assets/images/mypic.jpg"; // Adjust the path as necessary

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src={MyPicture}
        alt="Adelowo Olaoluwa Samuel"
        className="max-h-[750px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[80%] sm:h-[100%] min-h-[750px] w-auto text-gray blur-md animate-[spin_80s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
