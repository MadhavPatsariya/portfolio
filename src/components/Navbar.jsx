import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const lightStyle = {
        backgroundColor: 'rgba(45, 45, 45, 0.9)',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        color: '#f5f5f5',
    };

    const darkStyle = {
        backgroundColor: '#dfe4ea',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        color: '#2f3640',
    };

    const [navbarStyle, setNavStyle] = useState(darkStyle);
    const [hoveredButton, setHoveredButton] = useState(0);
    // const [logoUrl, setLogoUrl] = useState('../assets/name.png');

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
        borderBottom: '2px solid #1e90ff',
        transform: 'scale(1.05)',
    };

    function onScroll() {
        if (window.scrollY > 30) {
            setNavStyle(lightStyle);
            //setLogoUrl('../assets/white-name.png');
        } else {
            setNavStyle(darkStyle);
            //setLogoUrl('../assets/name.png');
        }
    }

    const addStyle = (key) => {
        setHoveredButton(key);
    };

    const removeStyle = () => {
        setHoveredButton(0);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ marginLeft: '2rem', paddingTop: '1rem', paddingRight: '2rem', fontWeight: 'bold', color: '#1e90ff' }}>
                    <span className="dot" style={{ height: '3rem', width: '3rem', backgroundColor: '#2f3640', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5f5f5' }}>mP.</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={hoveredButton === 1 ? hoverStyle : normalStyle}
                                to="/"
                                onMouseEnter={() => addStyle(1)}
                                onMouseLeave={removeStyle}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={hoveredButton === 2 ? hoverStyle : normalStyle}
                                to="/about"
                                onMouseEnter={() => addStyle(2)}
                                onMouseLeave={removeStyle}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={hoveredButton === 3 ? hoverStyle : normalStyle}
                                to="/project"
                                onMouseEnter={() => addStyle(3)}
                                onMouseLeave={removeStyle}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={hoveredButton === 4 ? hoverStyle : normalStyle}
                                to="/resume"
                                onMouseEnter={() => addStyle(4)}
                                onMouseLeave={removeStyle}
                            >
                                Resume & Insights
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
