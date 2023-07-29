import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import {StyledTimelineIcon, IconBackground, Container } from './TimelineElements'
import {useInView} from 'react-intersection-observer';
import {StyledLine} from './TimelineElements'


const TimelinePath = ({IconSrc, onDone, isVisible}) => {

        const [isDone, setIsDone] = useState(false);
      
        // Function to update the 'isDone' state and notify the parent
        const handleDone = () => {
          setIsDone(true);
          onDone(); // Call the callback function provided by the parent
        };
      
    const [expanded, setExpanded] = useState(false)
    const [displayIcon, setDisplayIcon] = useState(false)
    const expand = () => {
        setExpanded(!expanded)
        setDisplayIcon(false)
        console.log('displayIcon:', displayIcon);
    }

    const handleAnimationEnd = () => {
        setDisplayIcon(true);
    }
    

    const { ref: myRef, inView: toggleElementIsVisible } = useInView({
    threshold: 1,
    triggerOnce: true
    })
 
    return (
        /*If Element is visible then play animation, if the element is expanded set the height to remain at 200px and when Animation ends toggle the visibility of the Icon*/
        <Container show={isVisible}>
                <StyledLine
                    className={ `${toggleElementIsVisible}` ? 'animated' : ''}
                    ref={myRef}
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
        </Container>
    )
}

export default TimelinePath