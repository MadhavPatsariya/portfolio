// Home.jsx
import React from 'react';
import ScrambleText from './ScrambleText';
import Footer from './Footer';


export default function Home() {
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginTop: '20vh', display: 'flex', gap: '1rem', fontSize: 'xx-large', fontWeight: 'bold', marginLeft: '3rem' }}>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <div style={{ color: '#fff44f' }}>Hi, I am Madhav.</div>
                            <div style={{ background: 'linear-gradient(90deg, white, yellow)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent' }}>
                                <ScrambleText text="I am a software developer" speed={100} scrambleIterations={20} scrambleInterval={2000} />
                            </div>
                        </div>
                        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={require('../assets/snippets.gif')}
                                alt="Description of GIF"
                                style={{ width: '80%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '30vh', display: 'flex', }}>
                <div className='container'>
                    <div className='row' >
                        <div className="col-6" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className='row'>
                                <div style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                                    <span style={{ color: 'black' }}>Brief </span>
                                    <span style={{
                                        background: 'linear-gradient(90deg, white, yellow)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}>
                                        About
                                    </span>
                                    <span style={{ color: 'yellow' }}> Me</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div style={{ color: '#fff44f' }}>Crafting the future, one scalable product at a time. With 2 years of hands-on experience in product development, I’m on a mission to build innovative, high-performance solutions that push the boundaries of what's possible.</div>
                            </div>
                        </div>
                        <div className='col-2'></div>
                        <div className="col-4" style={{ justifyContent: 'center', display: 'flex' }}>
                            <img
                                src={require('../assets/bitmojit-wobg.png')}
                                alt="bitmoji"
                                style={{ width: '60%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='row' style={{ marginBottom: '5rem', marginTop: '5rem' }}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
