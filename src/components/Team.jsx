import React, { useEffect, useRef } from "react";
import { team as teamEn, teamPt } from "../constants";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "../utils/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const { language } = useLanguage();
  const team = language === "en" ? teamEn : teamPt;

  const ref = useRef();

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".team-member");

    elements.forEach((element, idx) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.75,
          delay: 0.1 * idx,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className={`${styles.paddingX} relative z-0 mb-[110px]`}>
      <h3 className={`${styles.sectionHeadText} text-center`}>
        {language === "en" ? "The Team" : "A Equipe"}
      </h3>
      <div
        className="team-container flex flex-wrap justify-center mt-10"
        ref={ref}
      >
        {team.map((member, idx) => (
          <div
            key={idx}
            className="team-member shadow-md rounded-lg overflow-hidden p-4 text-center"
          >
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-sm mb-2 font-bold" style={{color :"#ffae05"}}>{member.loc}</p>
            <p className="text-sm mb-2">{member.bio}</p>
            {/* <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded flex items-center justify-center mx-auto">
              {language === "en" ? "Contact" : "Contato"}{" "}
              <LinkedInIcon className="ml-1" />
            </button> */}
          </div>
        ))}
      </div>

      <style >{`
        .team-container {
          display: flex;
          flex-wrap: nowrap; /* Ensures no wrapping on large screens */
          gap: 16px; /* Space between cards */
        }

        .team-member {
          flex: 1 1 calc(33.33% - 16px); /* Ensures 3 cards per row */
          min-width: 280px; /* Minimum width of each card */
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .team-container {
            flex-wrap: wrap; /* Enable wrapping below 900px */
          }
          .team-member {
            flex: 1 1 100%; /* Each card takes full width */
            min-width: 100%; /* Cards will appear one below the other */
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Team, "team");
