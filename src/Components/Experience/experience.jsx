import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./UseWindowSize";
import { useState } from "react";
import './experience.css';

const VerticalAccordion = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <section className="experience-section" id="experience">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="title-gradient">Experience</span>
                </h2>
                <p className="section-description">
                    My Professional Journey, Experience, and Selected Projects.
                </p>
            </div>
            <div className="accordion-container">
                {items.map((item, index) => {
                    return (
                        <Panel
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            id={item.id}
                            number={index + 1}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            description={item.description}
                            role={item.role}
                            duration={item.duration}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const Panel = ({ open, setOpen, id, number, title, imgSrc, description, role, duration }) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className={`panel-button ${isOpen ? 'active' : ''}`}
                onClick={() => setOpen(id)}
            >
                <div className="panel-title-container">
                    <span className="panel-title-vertical">
                        {title}
                    </span>
                    <span className="panel-title-horizontal">{title}</span>
                </div>
                <div className="panel-number-box">
                    {number}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="panel-content-wrapper"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="panel-description"
                        >
                            <h3>{role}</h3>
                            <div className="duration-badge">{duration}</div>
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VerticalAccordion;

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "auto",
        transition: { duration: 0.3 }
    },
    closed: {
        width: "100%",
        height: "0px",
        transition: { duration: 0.3 }
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "SAAP Intern @UIT",
        role: "Student Academic Assistance Program (SAAP)",
        duration: "Nov 2024 | UIT University · Internship | Karāchi, Sindh, Pakistan · On-site",
        imgSrc: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        description: "Successfully completed a 4-month Teaching Internship under the Student Academic Assistance Program (SAAP) at UIT University. Gained hands-on experience in lecture delivery, curriculum support, student mentorship, classroom management, and academic assessment. Strengthened skills in outcome-based education (OBE), communication, leadership, and student engagement.",
    }
];