import React, { useEffect, useRef } from 'react';
import './skills.css';
import { FaWindows, FaDatabase } from 'react-icons/fa';
import { TbCpu } from 'react-icons/tb';
import { SiVercel } from 'react-icons/si';

const allSkills = [
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Oracle DB', icon: 'devicon-oracle-original colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Netlify', icon: 'devicon-netlify-plain colored' },
    { name: 'Streamlit', icon: 'devicon-python-plain colored' },
    { name: 'MS Office', ReactIcon: FaWindows, iconColor: '#0078D4' },
    { name: 'Assembly', ReactIcon: TbCpu, iconColor: '#00d4aa' },
    { name: 'Vercel', ReactIcon: SiVercel, iconColor: '#ffffff' },
    { name: 'Aiven', ReactIcon: FaDatabase, iconColor: '#f29111' },
];

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;

            card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = '';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="skill-card"
            ref={cardRef}
            tabIndex="0"
            style={{ transitionDelay: `${index * 40}ms` }}
            data-index={index}
        >
            <div className="icon-wrapper">
                {skill.ReactIcon ? (
                    <skill.ReactIcon
                        className="skill-icon"
                        style={{ color: skill.iconColor || 'var(--fg)', fontSize: '2.2rem' }}
                    />
                ) : (
                    <i className={`${skill.icon} skill-icon`}></i>
                )}
            </div>
            <h4 className="skill-name">{skill.name}</h4>
        </div>
    );
};

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.skill-card');
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, i * 40);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills-section" id="skills" ref={sectionRef}>
            <div className="section-header">
                <h2 className="section-title">
                    <span className="title-gradient">Skills & Technologies</span>
                </h2>
                <p className="section-description">
                    Technologies and tools I work with to bring ideas to life.
                </p>
            </div>

            <div className="skills-grid">
                {allSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
