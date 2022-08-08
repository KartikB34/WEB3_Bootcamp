import React,{useState, useEffect} from 'react'
import './Backbone.css'
import Bcontent from './Bcontent';

import Educator from '../../assets/backbone/educator.jpg'
import Mentor from '../../assets/backbone/mentor.jpg'

const Backbone = () => {

    const [content, setContent] = useState('Educator');
    const [source, setSource] = useState(Educator);
    const [name, setName] = useState('Master Oogway');
    const [lowwidth, setLowwidth] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 400) {
            setLowwidth(true);
        }
        else if(window.innerWidth > 400){
            setLowwidth(false);
        }
    },[]);

    const educatorHandler = () => {
        setContent('Educator')
        setSource(Educator)
        setName('Master Oogway')
    }
    const mentorHandler = () => {
        setContent('Mentor')
        setSource(Mentor)
        setName('Peter Parker')
    }
    const founderHandler = () => {
        setContent('Founder')
        setSource(Educator)
        setName('Master Oogway')
    }
    const programmanagerHandler = () => {
        setContent('Programmanager')
        setSource(Mentor)
        setName('Peter Parker')
    }
    const placementcellHandler = () => {
        setContent('Placementcell')
        setSource(Educator)
        setName('Master Oogway')
    }
    // let to_display = lowwidth? <div className='low-width-content'>{main_content}</div> : <>{main_content}</>;

  return (
    <>
      <div className="backbone-container">
        <span className='hr1'>Meet Your Backbone</span>

        <div className="backbone-content">
            <div className="backbone-tabs">
                <button className={`tab dist ${content==='Educator'? `selected` : ``}`} onClick={educatorHandler}> EDUCATOR </button>
                <button className={`tab dist ${content==='Mentor'? `selected` : ``}`} onClick={mentorHandler}> MENTOR </button>
                <button className={`tab dist ${content==='Founder'? `selected` : ``}`} onClick={founderHandler}> FOUNDER </button>
                <button className={`tab dist ${content==='Programmanager'? `selected` : ``}`} onClick={programmanagerHandler}> PROGRAM MANAGER </button>
                <button className={`tab dist ${content==='Placementcell'? `selected` : ``}`} onClick={placementcellHandler}> PLACEMENT CELL </button>
            </div>

            <div className='backbone-main'>    
                <div className="backbone-points">
                    <h1>{name}</h1>
                    <Bcontent content={content} />
                </div>

                <div className="backbone-image">
                    <img src={source} alt={content} />
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Backbone
