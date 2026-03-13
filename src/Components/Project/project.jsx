import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './project.css';
import studentPortalVideo from '../../assets/Student Portal.mp4';
import healthVideo from '../../assets/Health.mp4';
import nicVideo from '../../assets/TheNIC Website.mp4';
import cyberShieldVideo from '../../assets/Cybershield.mp4';
import dfaVideo from '../../assets/Password Validator.mp4';
import huffmanVideo from '../../assets/Compression.mp4';
import tictactoeVideo from '../../assets/TicTacToe.mp4';
import strategyPatternVideo from '../../assets/Strategy Pattern.mp4';
import hillCipherVideo from '../../assets/Hill Cipher.mp4';
import cpuSchedulerVideo from '../../assets/OS.mp4';


const projects = [
    {
        id: 1,
        number: "01",
        title: "Student Portal",
        category: "Web Development",
        description: "Nexor University Student Portal is a web-based system that helps students manage their academic activities in one place. Students can register for courses, view their results, check their timetable, and track fee payments through a secure dashboard. (Demo Credentials - Username: 23SP-001-CS | Password: password123)",
        video: studentPortalVideo,
        liveLink: "https://nexor-portal.vercel.app/login.html",
        githubLink: "https://github.com/M-Affan01/Student-Portal",
    },
    {
        id: 2,
        number: "02",
        title: "Remote Health Monitoring System",
        category: "Web Development",
        description: "HealthPulse Central is a cloud-based remote health monitoring platform that allows doctors and administrators to track patient vitals in real time. The system provides patient profile management, automated risk score calculation, and instant alerts when health metrics exceed safe limits.",
        video: healthVideo,
        liveLink: "https://cloudhealthtrack.netlify.app/",
        githubLink: "https://github.com/M-Affan01/HealthMonitor",
    },
    {
        id: 3,
        number: "03",
        title: "Norrbottens Islamiska Center (NIC) Website",
        category: "Web Development",
        description: "NIC Community Website is a responsive website concept created for an Islamic community center. The website works as a digital hub where community members can check prayer timings, learn about the mosque, view events, and access educational resources. It includes features like real-time prayer times, photo gallery, contact forms, and social media links. The project focuses on clean design, good user experience, and accessibility.",
        video: nicVideo,
        liveLink: "https://m-affan01.github.io/TheNIC-Nordic-Islamic-Center-Website-Functional/TheNic-Website/home/Home.html",
        githubLink: "https://github.com/M-Affan01/TheNIC-Nordic-Islamic-Center-Website-Functional",
    },
    {
        id: 4,
        number: "04",
        title: "CyberShield: DFA-Enhanced OS Security Protection",
        category: "Web Development",
        description: "CyberShield is a sophisticated security simulation system that bridges the gap between theoretical computation models and practical Operating System security. Developed for the 5th Semester OS Project, it integrates Deterministic Finite Automata (DFA) with real-world security paradigms to monitor, visualize, and mitigate brute-force attacks in real-time.",
        video: cyberShieldVideo,
        liveLink: "https://m-affan01.github.io/CyberShield/CyberShield/index.html",
        githubLink: "https://github.com/M-Affan01/CyberShield",
    },
    {
        id: 5,
        number: "05",
        title: "Dynamic DFA Password Validator",
        category: "Web Development",
        description: "An interactive web application that validates password strength using a 5-state Deterministic Finite Automaton (DFA) with real-time visualization and comprehensive reporting.",
        video: dfaVideo,
        liveLink: "https://m-affan01.github.io/Dynamic-DFA-Password-Validator/Password%20Validator/project.html",
        githubLink: "https://github.com/M-Affan01/Dynamic-DFA-Password-Validator",
    },
    {
        id: 6,
        number: "06",
        title: "HUFFMAN-Compression-Visualizer",
        category: "Web Development",
        description: "Enterprise-grade Huffman coding visualization platform featuring real-time tree construction, step-by-step greedy algorithm simulation, and bit-level compression analytics — delivered through a 4K-responsive glass morphism interface.",
        video: huffmanVideo,
        liveLink: "https://m-affan01.github.io/HUFFMAN-Compression-Visualizer/Huffman/index.html",
        githubLink: "https://github.com/M-Affan01/HUFFMAN-Compression-Visualizer",
    },
    {
        id: 7,
        number: "07",
        title: "Ultimate Tic-Tac-Toe AI",
        category: "AI and Machine Learning",
        description: "An unbeatable Tic-Tac-Toe AI powered by Minimax algorithm with a modern neon Streamlit interface.",
        video: tictactoeVideo,
        liveLink: "https://tic-tac-toe-ai-gssz738dmrbp9hhobmrwe8.streamlit.app/",
        githubLink: "https://github.com/M-Affan01/Tic-Tac-Toe-AI",
    },
    {
        id: 8,
        number: "08",
        title: "The Ultimate Strategy Pattern File Management Suite",
        category: "Python",
        description: "Main Sorter is a professional-grade, modular web application designed to solve the chaos of unorganized digital assets. By implementing the Strategy Design Pattern, it provides an extensible framework where disparate sorting algorithms—ranging from simple name-based sorting to complex AI-driven luminance analysis—coexist in a unified, high-performance ecosystem.",
        video: strategyPatternVideo,
        liveLink: "https://main-sorter-strategy-pattern-nfwncfhibbjgj6glqmctzg.streamlit.app/",
        githubLink: "https://github.com/M-Affan01/Main-Sorter-Strategy-Pattern",
    },
    {
        id: 9,
        number: "09",
        title: "HILL CIPHER",
        category: "Python",
        description: "Hill Cipher Platinum PRO is a tool to encrypt and decrypt messages using the Hill cipher with 2×2, 3×3, or 4×4 matrices. It shows all steps, checks matrices in real time, and allows batch processing. Built with Python, Streamlit, NumPy, and SymPy, it helps learn encryption and linear algebra with a clean, interactive interface.",
        video: hillCipherVideo,
        liveLink: "https://hill-cipher-atelop48crqkrqibj4vcli.streamlit.app/",
        githubLink: "https://github.com/M-Affan01/HILL-CIPHER",
    },
    {
        id: 10,
        number: "10",
        title: "CPU Process Scheduler",
        category: "Python",
        description: "A comprehensive desktop application for visualizing and comparing CPU scheduling algorithms (FCFS, SJF, Round Robin) with interactive Gantt charts, performance metrics, and intelligent recommendations.",
        video: cpuSchedulerVideo,
        liveLink: "https://cpu-process-scheduler-pro-5uyqvqpfwtglxudappdjahd.streamlit.app/",
        githubLink: "https://github.com/M-Affan01/CPU-Process-Scheduler-Pro",
    }
];

const categories = ["All", "Web Development", "Python", "AI and Machine Learning"];

const ProjectMedia = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            className="media-wrapper"
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="media-inner" style={{ transform: "translateZ(50px)" }}>
                <div className="media-sheen" />
                <video
                    ref={videoRef}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project-media-content"
                />
            </div>
        </motion.div>
    );
};

const ProjectItem = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`project-item ${isEven ? 'row-normal' : 'row-reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="project-media-container">
                <ProjectMedia project={project} />
            </div>

            <div className="project-info">
                <span className="project-num">{project.number}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-actions">
                    <a href={project.liveLink} className="live-link" target="_blank" rel="noopener noreferrer">
                        Live Link <FiArrowUpRight />
                    </a>
                    <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                        GitHub <FiGithub />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="title-gradient">My Projects</span>
                </h2>
                <div className="filter-container">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => {
                                setActiveCategory(cat);
                                setShowAll(false); // Reset showAll when category changes
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-list">
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </div>

            {filteredProjects.length > 6 && (
                <div className="show-more-container">
                    <button
                        className="show-more-btn"
                        onClick={() => {
                            if (showAll) {
                                // Find the first project that was hidden (index 6, which is the 7th project)
                                // We scroll to this element to return the user to where they clicked "Show All"
                                const projectItems = document.querySelectorAll('.project-item');
                                if (projectItems && projectItems.length > 6) {
                                    // Scroll to the 7th item, aligning it to the bottom of the viewport
                                    // This puts the Show All button right back where it was
                                    projectItems[6].scrollIntoView({ behavior: 'smooth', block: 'end' });
                                }
                            }
                            setShowAll(!showAll);
                        }}
                    >
                        {showAll ? (
                            <>Show Less <FiChevronUp /></>
                        ) : (
                            <>Show All Projects <FiChevronDown /></>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
