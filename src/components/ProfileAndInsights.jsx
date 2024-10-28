import React from 'react';
import Resume from './Resume';
import Recommendations from './Recommendations';

export default function ProfileAndInsights() {
  return (
    <div>
      <div className='container' style={{ marginTop: '6vh', textAlign: 'center' }}>
        <div style={{
          fontSize: 'xx-large',
          color: 'black',
          fontWeight: 'bold',
          marginBottom: '2rem' // Added margin for spacing
        }}>
          <span style={{
            background: 'linear-gradient(0deg, #74b9ff, #81ecec)', // Updated gradient color
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>My</span>
          <span style={{ color: '#74b9ff' }}> Resume</span>
        </div>
        <Resume />
      </div>

      <div className='container' style={{ marginTop: '4rem', textAlign: 'center' }}>
        <div style={{
          fontSize: 'xx-large',
          color: 'black',
          fontWeight: 'bold',
          marginBottom: '2rem' // Added margin for spacing
        }}>
          <span style={{
            background: 'linear-gradient(0deg, #74b9ff, #81ecec)', // Updated gradient color
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Recommendations
          </span>
        </div>
        <Recommendations />
      </div>
    </div>
  );
}
