import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.9)_0%,rgba(9,9,11,0.7)_100%)] backdrop-blur-sm border-b border-yellow-900/20`}
    >
      <div className="w-full font-['Poppins'] flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="size-12 rounded-full object-cover"
          />
          <p className="text-white font-['Poppins'] text-[18px] font-bold cursor-pointer">
            Demtse
            <span className="lg:block hidden"> | Front-end Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-gray-300"
                } hover:text-white text-[18px] cursor-pointer font-['Poppins']`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="size-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-zinc-900 absolute top-20 right-4 min-w-[140px] z-10 rounded-xl border border-yellow-900/20`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-gray-300"
                    } hover:text-white text-[16px] cursor-pointer font-['Poppins']`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
