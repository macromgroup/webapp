import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
import { experiences as experiencesEn, experiencesPt } from "../constants";
import { SectionWrapper } from "../hoc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "../utils/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const EXPGrid = ({ serv, servidx }) => {
  const isImageLeft = servidx % 2 === 0;
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const imageContainer = element.querySelector(".image-container");
    const textContainer = element.querySelector(".text-container");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imageContainer,
      { opacity: 0, x: isImageLeft ? "-100%" : "100%" },
      { opacity: 1, x: 0, duration: 0.5, ease: "easeOut" }
    ).fromTo(
      textContainer,
      { opacity: 0, x: isImageLeft ? "100%" : "-100%" },
      { opacity: 1, x: 0, duration: 0.5, ease: "easeOut" },
      "-=0.5"
    );
  }, [isImageLeft]);

  return (
    <div
      ref={ref}
      className={`flex md:flex-row items-center md:items-start py-4 md:py-6  ${
        isImageLeft && window.innerWidth <= 768
          ? "flex-col"
          : "flex-col-reverse"
      } mb-[110px]`}
    >
      <div
        className={`w-full md:w-1/2 flex justify-center items-center mb-2 md:mb-0 ${
          isImageLeft ? "order-1" : "order-2"
        } md:mr-4 image-container`}
      >
        <img
          src={serv.icon}
          alt={serv.title}
          className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover"
        />
      </div>
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center md:ml-8 ${
          isImageLeft ? "order-2" : "order-1"
        } text-container`}
      >
        <div>
          <h3 className="text-white text-[35px] font-bold mb-2">{serv.date}</h3>
          <h3 className="text-white text-[24px] font-bold mb-2">
            {serv.title}
          </h3>
          <p className="text-white text-[16px] font-semibold mb-4">
            {serv.company_name}
          </p>
        </div>
        <ul className="list-disc ml-5 space-y-2">
          {serv.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const experiences = language === "en" ? experiencesEn : experiencesPt;

  return (
    <>
      <div className={`${styles.paddingX}  relative z-0`}>
        <div>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            {language === "en" ? "Portfolio" : "Portfólio"}
          </h2>
        </div>

        <div className="mt-20 flex flex-col">
          {experiences.map((experience, index) => (
            <EXPGrid
              key={`experience-${index}`}
              servidx={index}
              serv={experience}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "portfolio");
