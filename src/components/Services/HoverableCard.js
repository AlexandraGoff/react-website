import React, { useState } from 'react'
import styled from 'styled-components'
import {StyledHoverableCard} from './ServicesElements'

const HoverableCard = ({gif, staticgif}) => {
    
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
        /*useState to toggle the 'hover' parameter within the element*/
    }

    /*On Mouse enter/leave set the hover parameter to true/false - set src of image to gif if mouse entered and to static image when mouse leaves*/
    return (
        <StyledHoverableCard onMouseEnter={onHover} onMouseLeave={onHover} src={hover ? gif : staticgif}/>
    )
}

export default HoverableCard