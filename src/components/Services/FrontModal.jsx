import React from 'react'
import "./FrontModal.css";
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';

const FrontModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>Vue.js & Nuxt 3</h2>
                    <div className="progress-bar">
                        <div className="vue"><span>90%</span></div>
                    </div>
                    <h2>React.js</h2>
                    <div className="progress-bar">
                        <div className="react"><span>80%</span></div>
                    </div>
                    <h2>Tailwind CSS</h2>
                    <div className="progress-bar">
                        <div className="tailwind"><span>85%</span></div>
                    </div>
                    <h2>HTML & CSS</h2>
                    <div className="progress-bar">
                        <div className="html"><span>90%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default FrontModal