import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const VerticalTimeline = ({ projects }) => {
  return (
    <div className="timeline">
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
    >
      <div className="timeline-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="timeline-footer">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub size={20} style={{ marginRight: '8px' }} />
            View on GitHub
          </a>
          <span className="project-date">{project.date}</span>
        </div>
      </div>

    </motion.div>
  );
};

export default VerticalTimeline;
