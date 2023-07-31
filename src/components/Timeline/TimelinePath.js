import React, { Fragment, useContext, useState, useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import {StyledTimelineIcon, IconBackground} from './TimelineElements'
import {StyledLine} from './TimelineElements'
import {useInView} from 'react-intersection-observer';


const TimelinePath = ({IconSrc, onDone, isVisible, childState}) => {

        const [isDone, setIsDone] = useState(false);
      
        // Function to update the 'isDone' state and notify the parent
        const handleDone = () => {
          setIsDone(true);
          onDone(); // Call the callback function provided by the parent
        };
        
    

        
    const [expanded, setExpanded] = useState(false)

    // State which sets icon to be hidden or shown.
    const [displayIcon, setDisplayIcon] = useState(false)

    const expand = () => {
        setExpanded(!expanded)
        setDisplayIcon(false)
        console.log('displayIcon:', displayIcon);
    }

    //Handle the end of the Line animation.
    const handleAnimationEnd = () => {
        setDisplayIcon(true);
    }

    const { ref: reference, inView} = useInView({
        threshold: 1,
        triggerOnce: true
        });
    
    
        console.log('in View => ',inView)
    return (
        /*If Element is visible then play animation, if the element is expanded set the height to remain at 200px and when Animation ends toggle the visibility of the Icon*/
        <Fragment>
                <StyledLine 
                    ref={reference}
                    className={inView ? 'animated' : ''}
                    style={{ height: expanded ? '200px' : '0px' }}
                    onAnimationEnd={handleAnimationEnd} />
                <IconBackground
                    show={displayIcon}>
                    <StyledTimelineIcon
                        src={IconSrc}
                        alt='New Image'
                        show={displayIcon}
                        onAnimationEnd={handleDone}
                        />
                </IconBackground>
        </Fragment>
    )
}

export default TimelinePath