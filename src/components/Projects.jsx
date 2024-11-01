import React from 'react';
import VerticalTimeline from './VerticalTimeline';

export default function Projects() {
  const projects = [
    { 
      title: 'StockTrack: Real-Time Stock Analysis App', 
      description: 'Designed a Web App using React that interacts with the Finnhub Stock API to fetch and display real-time 1000+ stock information. Built 7+ robust Node.js APIs tailored to specific functionalities. Integrated MongoDB database and hosted the app on Google Cloud Platform for enhanced data storage and accessibility. Employed HighCharts and Polygon.io for visualization in tabular and chart format.', 
      date: 'June 2022', 
      githubLink: 'https://github.com/MadhavPatsariya?tab=repositories'
    },
    { 
      title: 'iNotebook: Personalized Notes', 
      description: 'Developed an app featuring secure login and personalized dashboards for user-specific notes management. Integrated a rich text editor for creating, editing, and formatting notes, with functionality for users to delete their notes. Utilized NoSQL MongoDB for data storage, Express.js for server-side logic, and Node.js for backend integration. Built a dynamic, responsive front-end with React.js, ensuring a seamless and efficient user experience.', 
      date: 'Feb 2022', 
      githubLink: 'https://github.com/MadhavPatsariya/iNotebook' 
    },
    { 
      title: 'NLP-based Chatbot for Healthcare', 
      description: 'Implemented an AI-powered Chatbot for healthcare, providing solutions to 100+ health-specific issues through natural conversation. Enhanced the engine by leveraging the power of Large Language Models and fine-tuning them using various NLP techniques. Designed a WebApp using Flask and connected it to the Telegram bot hosted by NGROK.', 
      date: 'December 2021', 
      githubLink: 'https://github.com/MadhavPatsariya/Telegram-Chatbot' 
    },
    { 
      title: 'News Util', 
      description: 'A React-based app to provide every type of news in one place. Used third-party APIs to fetch the news and show it as cards. If users want to read more, they can click to read the news.', 
      date: 'May 2021', 
      githubLink: 'https://github.com/MadhavPatsariya/News-Util' 
    },
  ];

  return (
    <div>
      <div className='container' style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 'calc(1.2rem + 2vh)', color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '5rem' }}>
          <span style={{ color: 'black' }}>My </span>
          <span style={{
            background: 'linear-gradient(45deg, #74b9ff, #81ecec)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Recent
          </span>
          <span style={{ color: '#74b9ff' }}> Works</span>
        </div>
      </div>
      <div>
        <VerticalTimeline projects={projects} />
      </div>
    </div>
  );
}
