import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import img1 from '../../assets/images/superpalace.png';
import img2 from '../../assets/images/skycast.png';
import img4 from '../../assets/images/pizza.png';
const projects = [
  {
    name: "Super-Palace Food",
    year: "November 2025",
    align: "right",
    image: img1,
    link: "https://super-palace-food.vercel.app/",
  },
    {
    name: "Pizza Website",
    year: "October 2025",
    align: "left",
    image: img4,
    link: "https://pizza-website-puce.vercel.app/",
  },
  {
    name: "skyCast",
    year: "Jan 2026",
    align: "right",
    image: img2,
    link: "https://skycast-personal.vercel.app//",
  },
 
  // {
  //   name: "Ireign Website",
  //   year: "May2024",
  //   align: "left",
  //   image: img4,
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
