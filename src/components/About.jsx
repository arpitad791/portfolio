import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="rounded-[22px] bg-white/30 backdrop-blur-lg shadow-md p-[2px] transition-all"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="bg-white rounded-[20px] py-10 px-6 min-h-[280px] flex flex-col items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-pink-600 text-[20px] font-semibold text-center">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <section
      className={`relative w-full px-6 sm:px-10 py-20 max-w-7xl mx-auto`}
    >
      <motion.div variants={textVariant()}>
        <p className="text-[14px] text-neutral-600 uppercase tracking-wider mb-2">
          👋 Introduction
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-6">
          About Me
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-neutral-700 text-[17px] max-w-3xl leading-[30px] bg-white/50 p-5 rounded-2xl shadow-lg backdrop-blur-md border border-white/40"
      >
        I'm an enthusiastic full-stack developer with hands-on experience in
        JavaScript, React, Node.js, and Next.js. I've worked on both frontend
        and backend projects—ranging from responsive portfolio sites to
        real-time IoT dashboards—focusing on clean design, scalability, and user
        experience. Whether it’s building intuitive interfaces with React or
        optimizing performance on the backend, I enjoy transforming ideas into
        functional, impactful web solutions.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
