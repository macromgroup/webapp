import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { styles } from "../styles";
import { useLanguage } from "../utils/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      getInTouch: "Get in touch",
      email: "Info@Macromgroup.com",
      address: "124 City Road, London, EC1V 2NX",
      rightsReserved: "All rights reserved.",
    },
    pt: {
      getInTouch: "Entre em contato",
      email: "Info@Macromgroup.com",
      address: "124 City Road, London, EC1V 2NX",
      rightsReserved: "Todos os direitos reservados.",
    },
  };

  return (
    <footer className="text-white py-8" style={{ backgroundColor: "black" }}>
      <div className="foot-contain mx-auto px-4">
        <div className="contact-info">
          <p className={`${styles.heroSubText} GoldColored`}>
            {content[language].getInTouch}
          </p>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-white mr-4" />
            <p className="text-white">{content[language].email}</p>
          </div>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt className="text-white mr-4" />
            <p className="text-white">{content[language].address}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-8">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="GoldColored">MacroM Group</span>.{" "}
          {content[language].rightsReserved}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
