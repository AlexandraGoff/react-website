import React, { Fragment } from 'react'
import { ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'

const Services = () => {
    return (
        <Fragment>
            <ServicesContainer id="skills">
                <ServicesH1>What I do</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}></ServicesIcon>
                        <ServicesH2>Java & Python </ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>   
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}></ServicesIcon>
                        <ServicesH2>React.js</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>   
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}></ServicesIcon>
                        <ServicesH2>HTML, CSS & PHP</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>   
                    </ServicesCard>

                </ServicesWrapper>
            </ServicesContainer>
        </Fragment>
    )
}

export default Services
