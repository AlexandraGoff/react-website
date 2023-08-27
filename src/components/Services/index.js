import React, { Fragment} from 'react'
import { ServicesContainer,ServicesH1, ServicesWrapper } from './ServicesElements'
import gif from '../../videos/atworkgif.gif'
import staticgif from '../../images/atworkgif_static.png'
import project from '../../images/project.gif'
import projectStatic from '../../images/project-static.jpeg'
import HoverableCard from './HoverableCard'

const Services = () => {

    return (
        <Fragment>
            <ServicesContainer id = {'projects'}>
                <ServicesH1>Projects</ServicesH1>
                <ServicesWrapper>
                    <HoverableCard gif={gif} staticgif={staticgif}/>
                    <HoverableCard gif={gif} staticgif={staticgif}/>
                    <HoverableCard gif={gif} staticgif={staticgif}/>
                </ServicesWrapper>
            </ServicesContainer>
        </Fragment>
    )
}

export default Services
