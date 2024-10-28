import React from 'react';
import Techstack from './TechStack';
import ToolStack from './ToolStack';
import { GiThreePointedShuriken } from "react-icons/gi";

export default function PersonalDetails() {
    return (
        <div>
            <div className='container'>
                <div className='row' style={{ marginTop: '20vh', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="col-lg-6 col-md-12" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '4rem' }}>
                        <div className='row'>
                            <div style={{ color: 'black', fontSize: 'calc(1.2rem + 2vh)', fontWeight: 'bold' }}>
                                <span style={{ color: 'black' }}>Personal </span>
                                <span style={{
                                    background: 'linear-gradient(90deg, #74b9ff, #81ecec)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}>
                                    Details
                                </span>
                            </div>
                        </div>
                        <div className='row' style={{ color: '#636e72', fontSize: 'calc(0.6em + 0.5vw)', textAlign: 'start', marginTop: '2rem' }}>
                            <div>
                                Hi, I am Madhav. I am a software developer by profession but an electronics engineer by degree.
                            </div>
                            <div>
                                I am based in Hyderabad, India but I am a native from the state of Madhya Pradesh.
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                When I am not coding, I do:
                            </div>
                            <div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: '#636e72' }}>Cafe Hopping</span>
                                    </li>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: '#636e72' }}>Cooking</span>
                                    </li>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: '#636e72' }}>Reading Books</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12' style={{ justifyContent: 'center', display: 'flex' }}>
                        <img
                            src={require('../assets/desk-bg.png')}
                            alt="bitmoji"
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '2rem' }}
                        />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div style={{ fontSize: 'calc(1.2rem + 2vh)', color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '5rem' }}>
                        <span style={{ color: 'black' }}>Professional </span>
                        <span style={{
                            background: 'linear-gradient(90deg, #74b9ff, #81ecec)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Skill
                        </span>
                        <span style={{ color: '#74b9ff' }}>set</span>
                    </div>
                </div>
                <div className='row'>
                    <div style={{ marginTop: '3rem' }}>
                        <Techstack />
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginBottom: '5rem' }}>
                <div className='row'>
                    <div style={{ fontSize: 'calc(1.2rem + 2vh)', color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '5rem' }}>
                        <span style={{ color: 'black' }}>Professional </span>
                        <span style={{
                            background: 'linear-gradient(90deg, #74b9ff, #81ecec)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Tool
                        </span>
                        <span style={{ color: '#74b9ff' }}>set</span>
                    </div>
                </div>
                <div className='row'>
                    <div style={{ marginTop: '3rem' }}>
                        <ToolStack />
                    </div>
                </div>
            </div>
        </div>
    );
}
