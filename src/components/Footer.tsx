import LogoFooter from "./LogoFooter";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const terms = "Termos & Condições";
const policy = "Politica de Privacidade";
function Footer() {
  const navigate = useNavigate();

  function SecondScreenCall() {
    navigate(`/second`);
  }
  return (
    <footer className="space-y-6">
      <div className="mx-auto w-2 ">
        <button
          onClick={SecondScreenCall}
          className="bg-rightViolet-100 p-2 rounded-lg text-neutral-200"
        >
          <FaArrowsAltH />
        </button>
      </div>
      <div className="w-full h- p-8 bg-leftViolet-100">
        <h1 className="top-6 flex  text-2xl text-white font-bold justify-start gap-1">
          <LogoFooter /> SlideMovies
        </h1>
        <label className="p-6 space-y-8 mx-6 text-left text-xs text-white font-Montserrat flex  items-center">
          {terms} {policy}
          <li className="mx-80 text-4xl text-white font-bold font-Montserrat flex justify-end gap-8">
            <a
              className="font-bold text-white"
              href="https://www.facebook.com/slideworks.cc"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="font-bold text-white"
              href="https://slideworks.cc/#home"
              target="_blank"
            >
              <FaTwitter />
            </a>

            <a
              className="font-bold text-white"
              href="https://www.instagram.com/slideworks.cc/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
        </label>
      </div>
    </footer>
  );
}
export default Footer;
