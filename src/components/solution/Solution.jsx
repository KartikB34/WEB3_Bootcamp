import React, {useState} from 'react'
import './Solution.css'
// import { Switch, Route } from 'react-router-dom'

import Content from './Content'

const Solution = () => {

    const [content, setContent] = useState('Placements');

    const placementHandler = () => {
        setContent('Placement')
    }
    const mentorshipHandler = () => {
        setContent('Mentorship')
    }
    const experienceHandler = () => {
        setContent('Experience')
    }
    const learningHandler = () => {
        setContent('Learning')
    }
    const ecosystemHandler = () => {
        setContent('Ecosystem')
    }


    const buttonStyle = {
        // backgroundColor: 'white',
    }

  return (
    <div className='solution-content'>

        <h2>Your one stop solution</h2>

        <div className="solution-tabs">
            <button className="tab" style={buttonStyle} onClick={placementHandler}> PLACEMENT </button>
            <button className="tab" onClick={mentorshipHandler}> MENTORSHIP </button>
            <button className="tab" onClick={experienceHandler}> EXPERIENCE </button>
            <button className="tab" onClick={learningHandler}> LEARNING </button>
            <button className="tab" onClick={ecosystemHandler}> ECOSYSTEM </button>
        </div>
    
        <div className="routes">

            <Content content={content} />
            {/* <Switch>
              <Route exact path={"/placement"} >
                <Content content='Placement' />
              </Route>

              <Route exact path={"/mentorship"} >
                <Content content='Mentorship' />
              </Route>

              <Route exact path={"/experience"} >
                <Content content='Experience' />
              </Route>

              <Route exact path={"/learning"} >
                <Content content='Learning' />
              </Route>

              <Route exact path={"/ecosystem"} >
                <Content content='Ecosystem' />
              </Route>

            </Switch> */}
        </div>

    </div>
  )
}

export default Solution