import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const VerticalTimeline = ({ projects }) => {
  return (
    <div className="timeline" style={{ padding: '0 1rem', overflowX: 'hidden' }}> {/* Prevent horizontal scroll */}
      {projects.map((project, index) => (
        <TimelineItem key={index} project={project} index={index} />
      ))}
    </div>
  );
};

const TimelineItem = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const isLeft = index % 2 === 0;
  const animationDirection = isLeft ? { x: -100 } : { x: 100 };

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, ...animationDirection }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, ...animationDirection }}
      transition={{ duration: 0.6 }}
      style={{ 
        width: '100%', // Full width to prevent overflow
        maxWidth: '600px', // Prevent items from stretching too wide
        margin: '1rem auto', // Center items and add spacing
      }}
    >
      <div className="timeline-content">
        <h3 style={{ fontSize: 'calc(1.5rem + 1vh)', color: 'black' }}>{project.title}</h3> {/* Responsive font size */}
        <p style={{ fontSize: 'calc(1rem + 0.5vh)', color: '#636e72' }}>{project.description}</p> {/* Responsive font size */}
        <div className="timeline-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            style={{ display: 'flex', alignItems: 'center', color: '#1e90ff', textDecoration: 'none' }} // Style GitHub link
          >
            <FaGithub size={20} style={{ marginRight: '8px' }} />
            View on GitHub
          </a>
          <span className="project-date" style={{ fontSize: 'calc(0.8rem + 0.5vh)', color: '#636e72' }}>{project.date}</span> {/* Responsive font size */}
        </div>
      </div>
    </motion.div>
  );
};

export default VerticalTimeline;
