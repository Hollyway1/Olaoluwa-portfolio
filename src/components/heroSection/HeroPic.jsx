import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import MyPicture from "../../assets/images/mypic.png"; // Adjust the path as necessary

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative" // relative ensures absolute hexagon aligns
    >
      {/* Image - more bold and centered */}
      <img
        src={MyPicture}
        alt="Adelowo Olaoluwa Samuel"
        className="max-h-[450px] w-auto z-15 rounded-xl shadow-2xl object-center object-cover" 
        
      />

      {/* Hexagon background */}
      <div className="absolute -z-15 flex justify-center items-center animate-pulse">
        <PiHexagonThin
          className="md:h-[600px] sm:h-[600px] min-h-[700px] w-auto text-yellow-500 blur-md animate-[spin_20s_linear_infinite]" 
         
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
