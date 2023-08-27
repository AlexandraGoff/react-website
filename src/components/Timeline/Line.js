import React, { Fragment, useContext, useState, useEffect, forwardRef } from 'react'
import {StyledTimelineIcon, IconBackground, TimelineHeading, Milestone, TimelineSubheading, DescWrapper, Timeframe} from './TimelineElements'
import {StyledLine} from './TimelineElements'



const Line = ({}) => {


    const [expanded, setExpanded] = useState(false)

    return (
        <Fragment>
                <StyledLine
                    className={'animated'}
                    style={{ height: expanded ? '200px' : '0px' }}
                     />
        </Fragment>
    )
}

export default Line