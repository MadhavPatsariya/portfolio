import React from 'react';

export default function Recommendations() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                marginTop: '3rem',
                padding: '0 1rem', // Add some horizontal padding
            }}
        >
            {/* First Recommendation Card */}
            <div className="card" style={{
                fontSize: 'medium',
                fontWeight: 'normal',
                width: '100%', // Full width for better responsiveness
                maxWidth: '600px', // Limit max width
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Updated background color
                color: 'black',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'left',
            }}>
                <div className="card-body">
                    <p className="card-text">
                        "Madhav joined my team as a budding engineer, straight out of college. He showed a lot of inquisitiveness towards the technologies used in the project from the beginning and with passing days his inquisitiveness started spanning beyond that. We started discussing different new technologies and this enhanced both of our learnings. He also started working on his tasks independently very quickly. That happened because of his capability to pick up things real quick. He not only started working independently, but also started contributing in solution design, code review etc. I saw him growing from a newbie to a full-grown consultant in a very rapid manner and I am sure I will see him in an architect role very soon. 
                        As a lead or mentor, we always wish to have someone in our team who can contribute to our learning as well. Madhav is one of such kinds. I am sure he will grow tall in his career. My best wishes will always be with him."
                    </p>
                    <div className="row" style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <div className="column" style={{ fontWeight: 'bold' }}>
                            - Tanuj Roy
                        </div>
                        <span>Manager, Deloitte Consulting LLP</span>
                        <div className="column" style={{ marginTop: '1rem' }}>
                            <a
                                href="https://www.linkedin.com/in/madhav-patsariya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#1e90ff', // Updated button color
                                    color: '#fff', // White text for better contrast
                                    padding: '0.5rem 1rem',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    display: 'inline-block', // Ensures the link behaves like a button
                                    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effect
                                }}
                            >
                                See it on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Recommendation Card */}
            <div className="card" style={{
                fontSize: 'medium',
                fontWeight: 'normal',
                width: '100%', // Full width for better responsiveness
                maxWidth: '600px', // Limit max width
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Updated background color
                color: 'black',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'left',
                marginBottom: '4rem',
            }}>
                <div className="card-body">
                    <p className="card-text">
                        "I have had the pleasure of working with Madhav, who joined our team as an associate fresh out of college. From the very beginning, Madhav has shown himself to be a quick learner with a strong grasp of both technical and functional concepts. Despite his limited experience, he consistently provides reasonable and effective technical solutions. 
                        Madhav is particularly good with analysis and understanding. Not only does he offer valuable technical suggestions, but his recommendations for functional improvements are also commendable. His insights have often led to significant enhancements in our processes.
                        Madhav is not only technically proficient but also a joy to work with. He is polite, easy-going, and always willing to take on more responsibility than required at his level. His proactive attitude and reliability mean that I can trust him to handle tasks without needing constant follow-ups.
                        Having Madhav on our team has been a wonderful experience, and I highly recommend him for any role that requires dedication, technical skill, and a positive attitude."
                    </p>
                    <div className="row" style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <div className="column" style={{ fontWeight: 'bold' }}>
                            - Debojit Das
                        </div>
                        <span>Senior Consultant, Deloitte Consulting LLP</span>
                        <div className="column" style={{ marginTop: '1rem' }}>
                            <a
                                href="https://www.linkedin.com/in/madhav-patsariya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#1e90ff', // Updated button color
                                    color: '#fff', // White text for better contrast
                                    padding: '0.5rem 1rem',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    display: 'inline-block', // Ensures the link behaves like a button
                                    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effect
                                }}
                            >
                                See it on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
