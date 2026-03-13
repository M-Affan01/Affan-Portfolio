import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './SocialIcons.css';

const socialIcons = [
    { name: 'facebook', color: '#1877F2', url: 'https://www.facebook.com/affan.nexor/', icon: <FaFacebookF /> },
    { name: 'github', color: '#333333', url: 'https://github.com/M-Affan01', icon: <FaGithub /> },
    { name: 'linkedin', color: '#0A66C2', url: 'https://www.linkedin.com/in/affan-nexor-66abb8321/', icon: <FaLinkedinIn /> },
    { name: 'instagram', color: '#E4405F', url: 'https://www.instagram.com/m.affan8091/', icon: <FaInstagram /> },
];

const SocialIcon = ({ icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <article
                className="social-icon-article"
                style={{
                    backgroundColor: isHovered ? icon.color : 'transparent',
                    color: isHovered ? '#fff' : 'var(--fg)',
                    transform: isHovered ? 'translateY(-10px) rotateY(360deg)' : 'translateY(0) rotateY(0deg)',
                    boxShadow: isHovered ? `0 10px 30px ${icon.color}66` : 'none',
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'var(--border)'
                }}
            >
                <div
                    className="icon-container"
                    style={{
                        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    {icon.icon}
                </div>
            </article>
        </a>
    );
};

const SocialIcons = () => {
    return (
        <section className="social-icons-grid">
            {socialIcons.map((icon, index) => (
                <SocialIcon key={index} icon={icon} />
            ))}
        </section>
    );
};

export default SocialIcons;