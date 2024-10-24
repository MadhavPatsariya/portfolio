import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    
    const lightStyle = {backgroundColor: 'rgb(50,50,50,0.9)', position: 'sticky', top: '0', zIndex: '1000', color: 'yellow', textDecoration: 'none'}
    const darkStyle = { backgroundColor: '#fff44f', color: 'black', position: 'sticky', top: '0', zIndex: '1000', textDecoration: 'none'}
    const [navbarStyle, setNavStyle] = useState(darkStyle);
    const [hoveredButton, setHoveredButton] = useState(0);
    const normalStyle = {
        margin: '0',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit',
        padding: '0.5rem 1rem',
        borderBottom: '2px solid transparent',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease', 
    };

    const hoverStyle = {
        ...normalStyle,
        borderBottom: '2px solid rgba(0, 0, 0, 0.8)',
        transform: 'scale(1.05)', // Slight scaling effect
    };
    function onScroll () {
        if(window.scrollY > 30) {
            setNavStyle(lightStyle);
        }
        else{
            setNavStyle(darkStyle);
        }
    }
    const addStyle = (key) => {
        setHoveredButton(key);
    }
    const removeStyle = () => {
        setHoveredButton(0);
    }
    window.addEventListener("scroll", onScroll);
    return (
        <div style={navbarStyle}>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/" style={{marginLeft: '2rem', paddingTop: '1rem', paddingRight: '2rem', fontWeight: 'bold', color: 'yellow'}}>
                <span className="dot" style={{height: '3rem', width: '3rem', backgroundColor: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>mP.</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: 'flex-end', marginRight: '5rem'}}>
                    <ul className="navbar-nav mr-auto" style={{display: 'flex', gap: '4rem', justifyContent: 'center'}}>
                        <li className="nav-item" >
                            <Link style={hoveredButton === 1 ? hoverStyle : normalStyle} to='/' onMouseEnter={() => addStyle(1)} onMouseLeave={removeStyle}>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link style={hoveredButton === 2 ? hoverStyle : normalStyle} to='/about' onMouseEnter={() => addStyle(2)} onMouseLeave={removeStyle}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={hoveredButton === 3 ? hoverStyle : normalStyle} to='/project' onMouseEnter={() => addStyle(3)} onMouseLeave={removeStyle}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={hoveredButton === 4 ? hoverStyle : normalStyle} to='/resume' onMouseEnter={() => addStyle(4)} onMouseLeave={removeStyle}>Resume & Insights</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}