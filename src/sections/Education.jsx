// src/sections/Education.jsx
// import React from 'react';
// import { LinearGradient } from 'react-text-gradients';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

import { LinearGradient } from "react-text-gradients";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationHistory } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Education data array


// Card component for a single education entry
const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#32303a', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #32303a' }}
    date={education.duration}
    dateClassName="text-white"
    iconStyle={{ background: '#32303a', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.institution}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <h3 className="text-white text-base font-bold">{education.degree}</h3>
    <p className="text-gray-300 text-base font-mono" style={{ margin: 0 }}>
      {education.institution}
    </p>
    <p className="text-gray-300 text-sm mt-1">GPA: {education.gpa}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {education.courses.map((course, index) => (
        <span
          key={index}
          className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
        >
          {course}
        </span>
      ))}
    </div>
  </VerticalTimelineElement>
);

EducationCard.propTypes = {
  education: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    gpa: PropTypes.string.isRequired,
  }).isRequired,
};

// Main component that renders the education timeline
const Education = () => (
  <section id="education" className="w-full flex justify-center mb-20 px-4">
    <div className="flex flex-col w-full max-w-7xl items-center justify-start">
      {/* Section title */}
      <div className="w-full">
        <motion.h2
          className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <LinearGradient gradient={[ 'to left', '#ff9720 ,#fc0865' ]}>
            Education
          </LinearGradient>
        </motion.h2>
      </div>

      {/* Timeline */}
      <VerticalTimeline lineColor="#fff">
        {educationHistory.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Education;
