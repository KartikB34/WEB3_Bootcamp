import React from 'react'
import manfee from '../assets/manfee.png'
import Card from './card/Card'

import './Fees.css'

const Fees = () => {
  return (
    <>
    <div className='fees-container'>
        <div className="fee-title">
            <span className='hr2'>Fees Structure</span>
        </div>

        <div className="fee-structure">
            <div className="fees">
                <p>Fee Structure: -> Rs. 100000</p>
                <p> Rs. 30000 -> One time => 70% off</p>
                <br/>
                <p> <b>Instalments: 60% off</b></p>
                <p> Rs. 10000 per week on enrolment</p>
                <p> Next week: Rs. 10000</p>
            </div>
            {/* <Card >
                <div className="card-title">
                    <h3>EARLY BIRD DISCOUNT!</h3>
                </div>
                <div className="card-content">
                    <h1>70% OFF!</h1>
                </div>
            </Card> */}
            <div className="fee-image">
                <img src={manfee} alt='fees' />
            </div>
        </div>
    </div>

    <div className="two-minute">
        <p>Maybe you are <span className='hr2'>2 minutes</span> away from</p>
        <p> <span className='hr2'> revolutionising</span> your career!</p>
    </div>
    </>
  )
}

export default Fees