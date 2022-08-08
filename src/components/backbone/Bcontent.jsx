import React from 'react'

const Bcontent = ({content}) => {


    const Educator = (
        <p>"There are no Accidents" .The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers. A dog saves the life of the master from danger. One can find dogs everywhere in the world.</p>
    )
    const Mentor = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Founder = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Programmanager = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Placementcell = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )


    if (content === 'Educator')
    {
        return (<div>{Educator}</div>);
    }
    else if (content === 'Mentor')
    {
        return (<div>{Mentor}</div>);
    }
    else if (content === 'Founder')
    {
        return Founder;
    }
    else if (content === 'Programmanager')
    {
        return Programmanager;
    }
    else
    {
        return Placementcell;
    }


}

export default Bcontent;