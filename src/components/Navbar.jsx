import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} bg-gray-600 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-2-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className=" size-12 rounded-full " />
          <p className="text-white font-['Rubik'] text-[18px] font-bold cursor-pointer">
            Demtse
            <span className="sm:block hidden">| Front-end Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-gray-50"
              } hover:text-white text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="font-['Kanit']" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
