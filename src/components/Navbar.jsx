import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        toggle &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [toggle]);

  return (
    <nav className="w-full fixed top-0 z-30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-800 tracking-wide"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-red-600">{"<"}</span>
          <span className="text-gray-800">Arpita</span>
          <span className="text-red-600">{"/>"}</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer text-[17px] font-medium ${
                active === link.title
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              } transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center relative">
          {!toggle ? (
            <HiOutlineMenuAlt3
              className="text-2xl text-gray-800 cursor-pointer"
              onClick={() => setToggle(true)}
            />
          ) : (
            <VscChromeClose
              className="text-2xl text-gray-800 cursor-pointer"
              onClick={() => setToggle(false)}
            />
          )}
          {toggle && (
            <div
              ref={menuRef}
              className="absolute top-14 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-20"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-700 font-medium hover:text-red-600 transition"
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
