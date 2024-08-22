// import Logo from "../ui/Logo";
// import Logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-20" src={Logo} alt="logo" /> */}
        {/* <Logo /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaTwitterSquare />
        <FaInstagram />
        <FaFacebook />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
