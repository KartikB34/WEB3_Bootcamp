import React from 'react'
import champion from '../assets/champion.png'
import menwomentwo from '../assets/menwomentwo.png'

import './Champion.css'

const Champions = () => {
  return (
    <>
    <div className="champion-container">
        <div className="champion-title">
            <span className='hr2'>Our Champions</span>
        </div>

        <div className="champion-content">
            <div className="champion-text">
                <span className='hr3'>Service</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At enim donec at morbi vestibulum, sed metus lobortis dignissim. Pellentesque tempor sed aliquam lectus. Sagittis integer velit et non mattis ipsum sed quam leo. Vestibulum, sed tellus nec egestas egestas. Arcu sit quam vel porta lectus vehicula tincidunt sed dignissim. Sagittis, fermentum feugiat cursus dolor. In justo lacus nunc volutpat suspendisse pulvinar semper viverra. Maecenas eget tempor, mauris congue accumsan senectus tincidunt odio leo. Ipsum.</p>
            </div>

            <div className="champion-image">
                <img src={champion} alt='champion' />
                <h2>Name</h2>
            </div>
        </div>
    </div>

    <div className="switching-fast">
        <div className="switch-title">
            <p><span>WEB3</span> is Switching fast</p>
        </div>

        <div className="swtich-content">
            <img src={menwomentwo} alt='menwomen' />
            <div className="points">
                <ul>
                <li>Every 4th employee switches from service to product.</li>
                <li>20,000 new product based jobs per month</li>
                <li>95% average salary increment for professionals upskilling.</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Champions