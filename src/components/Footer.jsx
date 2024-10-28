import React from 'react';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillGoogleSquare
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className='container'>
                <div 
                    className='row' 
                    style={{ 
                        textAlign: 'center', 
                        display: 'block', 
                        fontWeight: 'bold', 
                        fontSize: 'calc(0.75em + 1vw)', 
                        marginBottom: '1rem' 
                    }}
                >
                    <div style={{ fontSize: 'calc(0.75em + 1vw)', fontWeight: 'bold' }}>
                        <span style={{ color: '#375f87' }}>REACH </span>
                        <span style={{
                            background: 'linear-gradient(0deg, #74b9ff, #81ecec)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            OUT TO
                        </span>
                        <span style={{ color: '#2d3436' }}> ME</span>
                    </div>
                </div>
                <div className='row' style={{ justifyContent: 'center', gap: '1rem' }}>
                    <div className='col-1'>
                        <a href="https://github.com/MadhavPatsariya"
                            target="_blank"
                            rel="noreferrer"
                            className='icons-a'>
                            <AiFillGithub style={{ color: '#375f87', fontSize: '2rem' }} />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="https://www.instagram.com/madhavpatsariya/"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <AiFillInstagram style={{ color: '#81ecec', fontSize: '2rem' }} />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="mailto:patsariya.madhav@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <AiFillGoogleSquare style={{ color: '#74b9ff', fontSize: '2rem' }} />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="https://www.linkedin.com/in/madhav-patsariya/"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <FaLinkedinIn style={{ color: '#375f87', fontSize: '2rem' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
