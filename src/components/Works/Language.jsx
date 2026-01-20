import React, { useContext } from "react";
import "./Language.css";
import Golang from "../../img/golang.svg";
import K8s from "../../img/k8s.svg";
import React_logo from "../../img/react.png";
import JS from "../../img/JS.png";
import Python from "../../img/Python.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <motion.div className="lang" id="languages"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      {/* left side */}
      <motion.div className="w-left"
        variants={fadeIn("right", "tween", 0.2, 1)}>
        <div className="awesome">
          {/* dark Mode */}
          <span id="lan-header-1" style={{ color: darkMode ? "white" : "" }}>
            Expertise in Modern
          </span>
          <span>Technologies</span>
          <span>
            Highly proficient in Golang and Node.js for building scalable backend systems.
            <br />
            Expertise in Kubernetes and Cloud Native architectures.
            <br />
            Building modern, high-performance web applications with Nuxt 3 and React.
            <br />
            Passionate about Open Source and contributing to the CNCF ecosystem.
          </span>
          <a target='_blank' rel="noreferrer" href="https://github.com/kubevela/kubevela/commits?author=AshvinBambhaniya2003"><button className="button s-button">Contributions</button></a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </motion.div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Golang} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React_logo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={K8s} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Python} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </motion.div>
  );
};

export default Works;
