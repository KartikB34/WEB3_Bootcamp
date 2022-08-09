import React from 'react'
import './Graph.css'

import graph from '../assets/graph.png'
import mancoin from '../assets/mancoin.png'

const Graph = () => {
  return (
    <div className='graph-div'>

        <div className="graph-text">

            <div className='graph-para'>
                <p>
                    <span className='hr2'>Get a</span>
                    <span className='hr3'> Guaranteed job</span>
                    <span className='hr2'> of minimum</span>
                    <span className='hr3'> 6 LPA</span>
                </p>
            </div>

            <div className="blocks">
                <div className="block"> Batch of 30 students</div>
                <div className="block"> Weekend oriented classes</div>
                <div className="block"> Quick doubt resolution</div>
                <div className="block"> Live Classes</div>
                <div className="block"> Web3 certification after learning</div>
                <div className="block"> Job placement</div>
                <div className="block"> 4 Projects</div>
            </div>

            <div className="button">
                <button>REGISTER NOW !</button>
            </div>

        </div>

        <div className="graph-images">
            <div className="graph-image">
                <img src={graph} alt='graph' />
            </div>

            <div className='mancoin'>
                <img src={mancoin} alt='mancoin' />
            </div>
        </div>



    </div>
  )
}

export default Graph