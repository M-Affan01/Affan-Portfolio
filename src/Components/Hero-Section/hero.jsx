import './hero.css';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

import SocialIcons from '../Social-icons/SocialIcons.jsx';


function Hero() {

    const elementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(elementRef.current, {
            strings: ["MERN Stack Developer", "Frontend Developer", "React Developer", "AI Enthusiast"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="hero">
            <div className="hero-centered-content">
                <p className="greeting">Hello 👋 I am</p>
                <h1 className='second'>Muhammad Affan</h1>
                <div className="typewriter-container">
                    <span className="typewriter-text" ref={elementRef}></span>
                </div>

                <p className='abc'>
                    Currently pursuing a <span>Software Engineering</span> degree, I am a <span>Full Stack Developer</span> skilled in the <span>MERN stack</span> (MongoDB, Express.js, React.js, Node.js). I build scalable and high-performance web applications and enjoy exploring <span>Artificial Intelligence</span> and modern technologies. I am passionate about creating useful digital products and open to freelance and remote work.
                </p>

                <div className="hero-btns">
                    <a href="#contact" className="btn-primary">
                        <span>Hire Me</span>
                    </a>
                    <a href="#projects" className="btn-secondary">
                        <span>View Projects</span>
                    </a>
                </div>

                <div className="social-wrapper-centered">
                    <SocialIcons />
                </div>
            </div>

            <div className="hero-bg-visual">
                <div className="spline-container">
                    {/* Spline viewer removed due to 403 Forbidden error */}
                </div>
            </div>
        </div>
    );
}

export default Hero;