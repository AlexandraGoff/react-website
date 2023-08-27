import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import {StyledHoverableCard, CardContent, CardTitle, CardText, CardWrapper, TextContent} from './ServicesElements'


const HoverableCard = ({gif, staticgif, Title, Description}) => {
    
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
        /*useState to toggle the 'hover' parameter within the element*/
    }

    /*On Mouse enter/leave set the hover parameter to true/false - set src of image to gif if mouse entered and to static image when mouse leaves*/
    return (
        <Fragment>
            <CardWrapper>
                <CardContent>
                </CardContent>
                <StyledHoverableCard onMouseEnter={onHover} onMouseLeave={onHover} src={hover ? gif : staticgif}/>
                <TextContent>
                <CardTitle>{Title}</CardTitle>
                <CardText>{Description}</CardText>
                </TextContent>
            </CardWrapper>
        </Fragment>
    )
}

export default HoverableCard