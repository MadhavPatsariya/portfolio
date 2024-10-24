import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillGoogleSquare
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
    return (
        <div style={{ display: 'flex' }}>
            <div className='container'>
                <div className='row' style={{ textAlign: 'center', display: 'block', fontWeight: 'bold', fontSize: 'xx-large', marginRight: '2rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
                        <span style={{ color: 'black' }}>REACH </span>
                        <span style={{
                            background: 'linear-gradient(90deg, white, yellow)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            OUT TO
                        </span>
                        <span style={{ color: 'yellow' }}> ME</span>
                    </div>

                </div>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-1'>
                        <a href="https://github.com/MadhavPatsariya"
                            target="_blank"
                            rel="noreferrer"
                            className='icons-a'>
                            <AiFillGithub className='icons-a' />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="https://www.instagram.com/madhavpatsariya/"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <AiFillInstagram className='icons-a' />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="patsariya.madhav@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <AiFillGoogleSquare className="icons-a" />
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href="https://www.linkedin.com/in/madhav-patsariya/"
                            target="_blank"
                            rel="noreferrer"
                            className="icons-a">
                            <FaLinkedinIn className="icons-a" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
