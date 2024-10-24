import React from 'react';
import './CodeSnippet.css';

const CodeSnippet = () => {
    return (
        <div className="card">
            <img 
                src={require('../assets/snippets.gif')} 
                alt="Description of GIF" 
                className="gif-image"
            />
        </div>
    );
};

export default CodeSnippet;
