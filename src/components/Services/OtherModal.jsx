import React from 'react'
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';
import "./OtherModal.css"

const OtherModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>Kubernetes & Docker</h2>
                    <div className="progress-bar">
                        <div className="k8s"><span>50%</span></div>
                    </div>
                    <h2>Helm & KubeVela</h2>
                    <div className="progress-bar">
                        <div className="helm"><span>60%</span></div>
                    </div>
                    <h2>CI/CD (Git/Actions)</h2>
                    <div className="progress-bar">
                        <div className="cicd"><span>70%</span></div>
                    </div>
                    <h2>SQL & Databases</h2>
                    <div className="progress-bar">
                        <div className="sql"><span>75%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OtherModal