import React, { Fragment, useState, useRef, useEffect} from 'react'
import { Timeline} from './TimelineElements.js'
import AcademicCap from '../../images/AcademicCap.svg'
import University from '../../images/uni.svg'
import TimelinePath from './TimelinePath.js'
import work from '../../images/work.svg'



const TimelineSection = () => {

    const [pathDone, setPathDone] = useState(false);


    const handlePathDone = () => {
        setPathDone(true);
    };


    return (
            <Timeline>
                    <TimelinePath
                        title={'Glasgow Clyde College'}
                        description={'Higher National Diploma'}
                        timeframeContent={'August 2019 – June 2021'}
                        isVisible={true}
                        onDone={handlePathDone}
                        IconSrc={AcademicCap}/>
                        {pathDone ? <TimelinePath
                                    title={'Glasgow Caledonian University'}
                                    description={'BSc Honours in Software Development'}
                                    timeframeContent={'September 2021 – June 2023 '}
                                    IconSrc={University}
                                    onDone={handlePathDone}
                                    /> : null}
                    

                            
            </Timeline>
        
    ) 
}

export default TimelineSection
