import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../utils/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "About us",
      paragraph1:
        "MacroM Group is a multi-asset international investment company which specialize in navigating the intricate landscape of global markets particularly in Europe and Africa with interests spanning various sectors such as  Real Estate, Finance and Technology.",
      paragraph2:
        "We pride ourselves on our team of experienced specialists, each proficient in their respective domains. This expertise enables us to discern the most promising investment strategies and approaches to curate the best solutions.",
      paragraph3:
        "Beyond traditional investment avenues, MacroM has a sharp eye for identifying opportunistic prospects. Whether it's uncovering undervalued assets ripe for growth or breathing new life into underperforming ventures, we are adept at capitalizing on market inefficiencies. Moreover, we confidently venture into pioneering new projects and innovations within our areas of expertise.",
    },
    pt: {
      heading: "Sobre nós",
      paragraph1:
        "A MacroM Group é uma empresa internacional de investimentos multi-ativos especializada em navegar pelo complexo cenário dos mercados globais, particularmente na Europa e África, com interesses que abrangem uma gama de classes de ativos em vários setores, como Imobiliário, Finanças e Tecnologia.",
      paragraph2:
        "Orgulhamo-nos da nossa equipa de especialistas experientes, cada um proficiente nas suas respetivas áreas. Esta expertise permite-nos discernir as estratégias de investimento mais promissoras e abordagens para curar as melhores soluções.",
      paragraph3:
        "Para além das vias tradicionais de investimento, a MacroM possui um olhar atento para identificar oportunidades oportunistas. Quer se trate de descobrir ativos subvalorizados prontos para crescer ou dar nova vida a empreendimentos subdesempenhados, somos peritos em capitalizar ineficiências de mercado. Além disso, aventuramo-nos confiantemente em novos projetos e inovações dentro das nossas áreas de especialização.",
    },
  };

  return (
    <div className={`${styles.paddingX} mx-2 relative z-0 mb-[110px]`}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {content[language].heading}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
      >
        {content[language].paragraph1}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
      >
        {content[language].paragraph2}
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
      >
        {content[language].paragraph3}
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");
