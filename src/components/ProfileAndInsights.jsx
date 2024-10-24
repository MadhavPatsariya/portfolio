import React from 'react'
import Resume from './Resume'
import Recommendations from './Recommendations'

export default function ProfileAndInsights() {
  return (
    <div>
      <div className='container' style={{ marginTop: '6vh' }}>
        <div style={{ fontSize: 'xx-large', color: 'black', textAlign: 'center', fontWeight: 'bold', }}>
          <span style={{
            background: 'linear-gradient(90deg, white, yellow)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>My</span>
          <span style={{ color: 'yellow' }}> Resume</span>
        </div>
        <Resume />
      </div>
      <div className='container' style={{ marginTop: '7rem' }}>
        <div style={{ fontSize: 'xx-large', color: 'black', textAlign: 'center', fontWeight: 'bold', }}>
          <span style={{
            background: 'linear-gradient(90deg, white, yellow)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Recommendations
          </span>
            <Recommendations/>
        </div>
      </div>
    </div>
  )
}
