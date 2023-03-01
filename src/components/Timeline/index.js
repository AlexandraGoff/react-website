import React, {useState} from 'react'
import { Timeline, Line, Img } from './TimelineElements.js'
import University from '../../images/icons8-university-50.png';
const TimelineSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
        /*Toggle Function*/
    }
    return (
        //Portfolio Timeline WIP 
        <Timeline>
            <Img src={University}/>
            <Line/>
        </Timeline>
    )
}

export default TimelineSection
