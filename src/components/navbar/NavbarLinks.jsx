import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ isMobile }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isMobile) dispatch(toggleMenu()); // close menu only on mobile
  };

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-4 text-center" : "flex-row gap-6"} text-white font-body`}>
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            onClick={handleClick}
            className="cursor-pointer hover:text-cyan transition-all duration-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
