import { useMotionValue, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiArrowRight, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import './certificate.css';
import FullStack from "../../assets/Web Development Certificate.png";
import CyberSecurity from "../../assets/Cyber Security Certificate.jpg";
import DigitalFreelancing from "../../assets/Digital Freelancing Certificate.png";
import BasicsOfComputerNetworks from "../../assets/Computer Networks.jpg";
import HCIA from "../../assets/Huawei Certificate.png";
import ComputerNetwork from "../../assets/Huawei Certificate-detail.png";
import Python from "../../assets/Introduction to Python.jpg";
import CleaningData from "../../assets/Cleaning Data.jpg";
import IntroductionToAIAgents from "../../assets/Introduction to AI Agents.jpg";


const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const achievements = [
    {
      title: "Full Stack Web Development",
      description: "Completed a Full Stack Web Development (MERN Stack) course where I learned to build web applications using MongoDB, Express.js, React, and Node.js.",
      imgSrc: FullStack,
    },
    {
      title: "Cyber Security",
      description: "Completed a Cyber Security course where I learned the basics of network security, encryption, common cyber threats, and methods to protect systems and data.",
      imgSrc: CyberSecurity,
    },
    {
      title: "Digital Freelancing",
      description: "Completed a Digital Freelancing course where I learned how to find clients online, create professional profiles, and deliver freelance services effectively.",
      imgSrc: DigitalFreelancing,
    },
    {
      title: "Basics of Computer Networks",
      description: "Completed a Basics of Computer Networks course where I learned the fundamentals of computer networks, including network topologies, protocols, and network security.",
      imgSrc: BasicsOfComputerNetworks,
    },
    {
      title: "HCIA-Datacom V1.0 Course",
      description: "Completed the HCIA-Datacom V1.0 certification covering networking fundamentals, OSI and TCP/IP models, IP addressing, routing basics, and network security concepts.",
      imgSrc: HCIA,
    },
    {
      title: "Computer Network",
      description: "Completed a 64-hour advanced Computer Networks course, learning network types, OSI & TCP/IP models, IP addressing, routing, switching, protocols, and basic network security.",
      imgSrc: ComputerNetwork,
    },
    {
      title: "Introduction to Python",
      description: "Completed an Introduction to Python course, learning variables, data types, lists, functions, and basic NumPy for simple data analysis.",
      imgSrc: Python,
    },
    {
      title: "Cleaning Data with Generative AI",
      description: "Completed a course on Cleaning Data with Generative AI, learning how to preprocess, clean, and organize data using AI tools for better analysis and modeling.",
      imgSrc: CleaningData,
    },
    {
      title: "Introduction to AI Agents",
      description: "Completed the Introduction to AI Agents course, learning the basics of AI agents, how they perceive environments, make decisions, and perform tasks autonomously.",
      imgSrc: IntroductionToAIAgents,
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-header">
        <h2 className="section-title">
          <span className="sparkle"></span>{" "}
          <span className="title-gradient">My Achievements</span>
        </h2>
      </div>
      <div className="certifications-list">
        <AnimatePresence>
          {(showAll ? achievements : achievements.slice(0, 5)).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                number={(index + 1).toString().padStart(2, '0')}
                heading={item.title}
                subheading={item.description}
                imgSrc={item.imgSrc}
                onClick={() => setSelectedImage(item.imgSrc)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {achievements.length > 5 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => {
              if (showAll) {
                // Find the first certificate that was hidden (index 5, which is the 6th certificate)
                // We scroll to this element to return the user to where they clicked "Show More"
                const certItems = document.querySelectorAll('.cert-link');
                if (certItems && certItems.length > 5) {
                  // Scroll to the 6th item, aligning it to the bottom of the viewport
                  // This puts the Show More button right back where it was
                  certItems[5].scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
              }
              setShowAll(!showAll);
            }}
          >
            {showAll ? (
              <>Show Less <FiChevronUp /></>
            ) : (
              <>Show More Certifications <FiChevronDown /></>
            )}
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cert-modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelectedImage(null)}>
                <FiX />
              </button>
              <img src={selectedImage} alt="Certificate Full View" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

const Link = ({ heading, imgSrc, subheading, number, onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onClick={onClick}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="cert-link"
      style={{ cursor: 'pointer' }}
    >
      <div className="cert-content-wrapper">
        <span className="cert-number">{number}</span>
        <div className="cert-info">
          <h3 className="cert-heading">{heading}</h3>
          <p className="cert-subheading">{subheading}</p>
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="cert-hover-img"
        alt={`Certificate for ${heading}`}
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="cert-arrow-container"
      >
        <FiArrowRight className="cert-arrow" />
      </motion.div>
    </motion.div>
  );
};
