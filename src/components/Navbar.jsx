import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm"
        : "bg-transparent border-transparent"
        }`}
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
            className="size-12 rounded-full object-cover border border-zinc-200 shadow-sm"
          />
          <p className="text-zinc-500 font-['Poppins'] text-[18px] font-bold cursor-pointer flex items-center gap-2">
            Demtse
            <span className="lg:block hidden text-zinc-500 font-normal">| Web Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row gap-10 items-center">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-zinc-900 font-semibold" : "text-zinc-500"
                  } hover:text-zinc-900 text-[16px] cursor-pointer font-['Poppins'] transition-colors duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="size-[28px] object-contain cursor-pointer opacity-80 hover:opacity-100 transition-opacity invert"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-white absolute top-20 right-4 min-w-[140px] z-10 rounded-xl border border-zinc-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-zinc-900 font-medium" : "text-zinc-500"
                    } hover:text-zinc-900 text-[16px] cursor-pointer font-['Poppins']`}
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
