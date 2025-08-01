import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#FFFFFF", color: "#828282" }}
    contentArrowStyle={{ borderRight: "7px solid #828282" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
      <p className="text-black text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div id="Work">
        <motion.div variants={textVariant()}>
          <p className={`  text-neutral-900`}>What I have done so far</p>
          <h2 className={`${styles.sectionHeadText} dark:text-neutral-900`}>
            Work Experience.
          </h2>
        </motion.div>
        <div className="mt-10 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
