import React from 'react'
import faq from '../assets/faq.png'
import whatsapp from '../assets/whatsapp.png'

import Accordion from './accordion/Accordion'

import './Faq.css'

const Faq = () => {
  return (
    <div className='faq-container'>
        <div className="faq-title">
            <p>Your First Job depends on your college,</p>
            <p> your Next Job depends on you.</p>
        </div>

        <img src={faq} alt='faq' />

        <div className="faq-questions">
            <div className="faq-contact">
                <p><b>FAQs</b></p>
                <p>If you have any further questions, Contact us at :</p>
                <img src={whatsapp} alt='whatsapp' />
                <p>+91 1957496375</p>
            </div>
            <div className="faq-accordion">
                <Accordion />
            </div>
        </div>
    </div>
  )
}

export default Faq