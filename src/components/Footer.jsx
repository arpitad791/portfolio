import { SectionWrapper } from "../hoc";
import { AiFillLinkedin, AiFillGithub, AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" text-black text-center flex w-full p-8 flex-col items-center gap-6">
      © 2025 Arpita Dhamange. All rights reserved.
      <div className="w-full flex items-center justify-center gap-2">
        Built with
        <AiFillHeart size={20} className="animate-pulse" />
        Love
      </div>
      <div className="w-full flex justify-center gap-8">
        <AiFillLinkedin
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://www.linkedin.com/in/jmontodev/")}
        />
        <AiFillGithub
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://github.com/jmonto55")}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
