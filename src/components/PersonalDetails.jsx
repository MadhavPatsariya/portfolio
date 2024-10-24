import React from 'react'
import Techstack from './TechStack'
import ToolStack from './ToolStack'
import { GiThreePointedShuriken } from "react-icons/gi";
export default function PersonalDetails() {
    return (
        <div>
            <div className='container'>
                <div className='row' style={{ marginTop: '20vh' }}>
                    <div className="col-6" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '4rem' }}>
                        <div className='row'>
                            <div style={{ color: 'white', fontSize: 'xxx-large', fontWeight: 'bold' }}>
                                <span style={{ color: 'white' }}>Personal </span>
                                <span style={{
                                    background: 'linear-gradient(90deg, white, yellow)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}>
                                    Details
                                </span>
                            </div>
                        </div>
                        <div className='row' style={{ color: 'black', fontSize: 'large', fontWeight: 'bold', textAlign: 'start' }}>
                            <div style={{ color: '#fff44f' }}>
                                Hi, I am <span style={{ color: 'white' }}>Madhav</span>. I am a
                                <span style={{ color: 'white' }}> Software Developer</span> by profession and an
                                <span style={{ color: 'white' }}> Electronics Engineer</span> by degree.
                            </div>
                            <div style={{ color: '#fff44f' }}>
                                I am based in <span style={{ color: 'white' }}>Hyderabad, India</span> but my hometown is in
                                <span style={{ color: 'white' }}> Madhya Pradesh</span>.
                            </div>
                            <div style={{ color: '#fff44f', marginTop: '1rem' }}>
                                When I am not coding, I do:
                            </div>
                            <div style={{ color: '#fff44f' }}>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: 'white' }}>Cafe Hopping</span>
                                    </li>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: '#fff44f' }}>Cooking</span>
                                    </li>
                                    <li className="about-activity">
                                        <GiThreePointedShuriken /> <span style={{ color: 'white' }}>Reading Books</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                    <div className="col-4" style={{ justifyContent: 'center', display: 'flex' }}>
                        <img
                            src={require('../assets/desk-bg.png')}
                            alt="bitmoji"
                            style={{ width: '120%', height: 'auto', marginTop: '2rem' }}
                        />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div style={{ fontSize: 'xxx-large', color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '5rem' }}>
                        <span style={{ color: 'black' }}>Professional </span>
                        <span style={{
                            background: 'linear-gradient(90deg, white, yellow)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Skill
                        </span>
                        <span style={{ color: 'yellow' }}>set</span>
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
                    <div style={{ fontSize: 'xxx-large', color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '5rem' }}>
                        <span style={{ color: 'black' }}>Professional </span>
                        <span style={{
                            background: 'linear-gradient(90deg, white, yellow)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Tool
                        </span>
                        <span style={{ color: 'yellow' }}>set</span>
                    </div>
                </div>
                <div className='row'>
                    <div style={{ marginTop: '3rem' }}>
                        <ToolStack />
                    </div>
                </div>
            </div>
        </div>
    )
}
