import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../utils/LanguageContext";

const navLinks = {
  en: [
    { id: "about", title: "About" },
    { id: "portfolio", title: "Portfolio" },
    { id: "projects", title: "Projects" },
    { id: "team", title: "Team" },
    { id: "contact", title: "Contact" },
  ],
  pt: [
    { id: "about", title: "Sobre" },
    { id: "portfolio", title: "Portfólio" },
    { id: "projects", title: "Projetos" },
    { id: "team", title: "Equipe" },
    { id: "contact", title: "Contato" },
  ],
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const yOffset = window.innerWidth < 640 ? -100 : -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log(y, active);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks[language].map((link) =>
        document.getElementById(link.id)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 5;

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.pageYOffset + rect.top;
          const sectionHeight = rect.height;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionTop + sectionHeight
          ) {
            setActive(section.id);
          }
        }
      });
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);

  const [lan, setLanguage] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    if (lang != "") {
      toggleLanguage(lang);
    }
    console.log(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="md:px-10 w-full flex items-center py-5 fixed top-0 z-20 bg-black">
      <div className="w-full grid grid-cols-3 items-center ">
        <div className="justify-self-start">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "45px", width: "95px" }}
            />
          </Link>
        </div>

        <ul className="list-none hidden md:flex flex-row lg:gap-10 md:gap-5 justify-center  ">
          {navLinks[language].slice(0, 4).map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "GoldColored"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.id);
                scrollToSection(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-self-end">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                <span>
                  {lan === ""
                    ? "Language"
                    : lan === "en"
                    ? "English"
                    : "Português"}
                </span>
                <svg
                  className={`ml-2 w-5 h-5 transform transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {dropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  {/* Divider and "Select Language" option */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("");
                    }}
                  >
                    Language
                  </a>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-1"></div>

                  {/* English Option */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("en");
                    }}
                  >
                    English
                  </a>

                  {/* Portuguese Option */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("pt");
                    }}
                  >
                    Português
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="lg:ml-16 md:ml-1">
            <div
              className={`${
                active === navLinks[language][4].id
                  ? "text-white"
                  : "GoldColored"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(navLinks[language][4].id);
                scrollToSection(navLinks[language][4].id);
              }}
            >
              <a href={`#${navLinks[language][4].id}`}>
                {navLinks[language][4].title}
              </a>
            </div>
          </div>
        </div>

        <div className="justify-self-center md:hidden ">
          <div className="relative inline-block text-center">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
            >
              <span>
                {lan === ""
                  ? "Language"
                  : lan === "en"
                  ? "English"
                  : "Português"}
              </span>
              <svg
                className={`ml-2 w-5 h-5 transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Language Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("");
                    }}
                  >
                    Language
                  </a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("en");
                    }}
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      selectLanguage("pt");
                    }}
                  >
                    Português
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" md:hidden justify-self-end mr-2">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-50"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } md:hidden p-4 black-gradient absolute top-20 right-0 mx-4 my-2 z-40 rounded-lg max-w-max`}
        >
          <ul className="list-none flex justify-start items-start flex-col gap-4">
            {navLinks[language].map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-white" : "GoldColored"
                } font-poppins hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.id);
                  scrollToSection(link.id);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
