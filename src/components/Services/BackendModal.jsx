import React from 'react'
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';
import "./BackendModal.css"

const BackendModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>Golang</h2>
                    <div className="progress-bar">
                        <div className="golang"><span>90%</span></div>
                    </div>
                    <h2>Node.js & Express</h2>
                    <div className="progress-bar">
                        <div className="node"><span>80%</span></div>
                    </div>
                    <h2>Python</h2>
                    <div className="progress-bar">
                        <div className="python"><span>75%</span></div>
                    </div>
                    <h2>Laravel</h2>
                    <div className="progress-bar">
                        <div className="laravel"><span>30%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BackendModal