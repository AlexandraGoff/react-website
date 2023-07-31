import React, { Fragment, useState, useRef, useEffect} from 'react'
import { Timeline} from './TimelineElements.js'
import AcademicCap from '../../images/AcademicCap.svg'
import University from '../../images/uni.svg'
import TimelinePath from './TimelinePath.js'



const TimelineSection = () => {

    const [pathDone, setPathDone] = useState(false);

    const handlePathDone = () => {
        setPathDone(true);
    };


    return (
            <Timeline>
                    <TimelinePath
                        isVisible={true}
                        onDone={handlePathDone}
                        IconSrc={AcademicCap}/>
                        {pathDone ? <TimelinePath
                                    IconSrc={University}
                                    onDone={handlePathDone}
                                    /> : null}
            </Timeline>
        
    ) 
}

export default TimelineSection
