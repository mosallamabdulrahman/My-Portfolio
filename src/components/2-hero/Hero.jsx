import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./myImageCrop.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          FrontEnd Developer, Wordpress Developer.
        </motion.h1>

        <p className="sub-title">
          I’m Abdulrahman Rafat, a FrontEnd Developer & Wordpress Developer Work
          In <a href="https://mosalam.com/">Mosalam</a> Company
        </p>

        <div className="all-icons flex">
          <a href="https://www.facebook.com/abdo.rafat.14019">
            <div className="icon icon-facebook2"></div>
          </a>
          <a href="https://www.linkedin.com/in/abdulrahman-rafat-998760316/">
            <div className="icon icon-linkedin"></div>
          </a>
          <a href="https://github.com/mosallamabdulrahman">
            <div className="icon icon-github"></div>
          </a>
        </div>
        <a
          // @ts-ignore
          href={`${import.meta.env.BASE_URL}Abdulrahman-Rafat-CV.pdf`}
          download
          className="download-cv-btn"
        >
          <DocumentArrowDownIcon className="download-icon" />
          Download My CV
        </a>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
