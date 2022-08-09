import React from 'react'
import './Landing.css'

import menwomen from '../assets/menwomen.png'
import bluehex from '../assets/bluehex.png'
import whitehex from '../assets/whitehex.png'
import blubo from '../assets/blubo.png'
import blubn from '../assets/blubn.png'

const Landing = () => {
  return (
    <>
    <div className='background'>
        <div className="text">
            <p> <span className='hr1'>It's right time to </span> <span className='hr2'>learn</span></p>
            <h3>WEB3 DEVELOPMENT</h3>
            <p>On the mission to convert 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
        </div>
        <div className="image">
            <img src={menwomen} alt='men-women' />
        </div>
    </div>

    <div className="revolution">
      <img src={bluehex} alt="hex" />
      <div className='revolution-text'>
        <h3>WEB3 Development can bring revolution in your salaries!</h3>
      </div>
    </div>

    <div className="career">
      <div className="career-text">
        <p>Come make your <span className='hr3'>Career</span></p> 
        <p>in <span className='hr3'>WEB3</span></p>
      </div>
      <div className="image">
        <img src={whitehex} alt="hex" />
      </div>
    </div>

    <div className="second-batch">
      <img src={blubo} alt="blubo" />
      <div className='second-batch-text'>
        <p><span className='hr2'>Second batch for</span> <span className='hr3'>WEB3</span> <span className='hr2'>Enthusiasts</span></p>
        <p>A project orientated program exclusive for working professionals on weekends </p>
      </div>
      <img src={blubn} alt="blubn" />
    </div>
    </>
  )
}

export default Landing