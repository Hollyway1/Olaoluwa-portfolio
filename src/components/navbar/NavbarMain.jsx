import { useSelector } from "react-redux";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  // Correctly read Redux state
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-20 px-4">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center bg-black p-6 rounded-full border border-orange">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          <NavbarLinks />
          <NavbarBtn />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <NavbarBtn />
          <NavbarToggler />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/80 backdrop-blur-lg rounded-b-xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <NavbarLinks isMobile={true} />
      </div>
    </nav>
  );
};

export default NavbarMain;
