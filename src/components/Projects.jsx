import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../utils/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Projects",
      description:
        "We take on the initiative of creating our own in-house projects when we spot opportunities.",
    },
    pt: {
      title: "Projetos",
      description:
        "Tomamos a iniciativa de criar nossos próprios projetos internos quando identificamos oportunidades.",
    },
  };

  return (
    <div className={`${styles.paddingX} relative z-0 mb-[140px]`}>
      <h1 className={`${styles.sectionHeadText} text-center`}>
        {content[language].title}
      </h1>
      <h6
        className={`sm:text-[18px] text-[14px]  text-center tracking-wider mt-2 text-white`}
      >
        {content[language].description}
      </h6>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
