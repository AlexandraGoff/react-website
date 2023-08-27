import React, { Fragment, useContext, useState, useEffect, forwardRef } from 'react'
import {StyledTimelineIcon, IconBackground, TimelineHeading, Milestone, TimelineSubheading, DescWrapper, Timeframe} from './TimelineElements'

const Achievement = ({IconSrc,  title, description, timeframeContent}) => {

    return (
        <Fragment>
                <Milestone>
                    <IconBackground>
                        <StyledTimelineIcon
                            src={IconSrc}
                            alt='New Image'
                            />
                    </IconBackground>
                    <DescWrapper>
                        <TimelineHeading>{title}</TimelineHeading>
                        <TimelineSubheading>{description}</TimelineSubheading>
                        <Timeframe>{timeframeContent}</Timeframe>
                    </DescWrapper>
                </Milestone>
        </Fragment>
    )
}

export default Achievement