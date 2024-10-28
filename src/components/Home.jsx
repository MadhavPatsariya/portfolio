import React from 'react';
import ScrambleText from './ScrambleText';
import Footer from './Footer';

export default function Home() {
    return (
        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <div className="container">
                <div className="row" style={{ textAlign: 'start', marginRight: '2rem' }}>
                    <div className="col-12 col-md-6"  style={{ marginTop: window.innerWidth <= 600 ? '10vh' : '25vh' }}>
                        <div
                            style={{
                                fontSize: 'calc(1.5em + 1vw)', // Adjust font size based on screen width
                                fontWeight: 'bold',
                                color: '#375f87'
                            }}
                        >
                            Hi, I am Madhav.
                        </div>
                        <div style={{
                            background: 'linear-gradient(0deg, #74b9ff, #81ecec)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            fontSize: 'calc(1.0em + 1vw)', // Matching font size
                            fontWeight: 'bold' // Ensure the same font weight
                        }}>
                            <ScrambleText
                                text="I am a software developer"
                                speed={100}
                                scrambleIterations={20}
                                scrambleInterval={2000}

                            />
                        </div>

                    </div>
                    <div
                        className="col-12 col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '6rem'
                        }}
                    >
                        <img
                            src={require('../assets/computer.png')}
                            alt="Description of GIF"
                            style={{
                                width: '100%',
                                maxWidth: '450px', // Larger max width for desktop
                                
                            }}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '12vh' }}>
                    <div className="row">
                        <div
                            className="col-12 col-md-6"
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <div className="row">
                                <div
                                    style={{
                                        fontSize: 'calc(1.5em + 1vw)', // Responsive font size
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <span style={{ color: '#1e90ff' }}>Brief </span>
                                    <span style={{
                                        background: 'linear-gradient(0deg, #74b9ff, #81ecec)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}>
                                        About
                                    </span>
                                    <span style={{ color: '#2d3436' }}> Me</span>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    style={{
                                        color: '#636e72',
                                        padding: '1rem',
                                        fontSize: 'calc(1em + 0.5vw)' // Responsive font size for description
                                    }}
                                >
                                    Crafting the future, one scalable product at a time. With 2 years of hands-on experience in product development, I’m on a mission to build innovative, high-performance solutions that push the boundaries of what's possible.
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-6"
                            style={{
                                justifyContent: 'center',
                                display: 'flex',
                                marginTop: '2rem'
                            }}
                        >
                            <img
                                src={require('../assets/bitmojit-wobg.png')}
                                alt="bitmoji"
                                style={{
                                    width: '100%',
                                    maxWidth: '300px', // Larger max width for desktop
                                    borderRadius: '12px'
                                }}
                            />
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '4rem', marginTop: '4rem' }}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
