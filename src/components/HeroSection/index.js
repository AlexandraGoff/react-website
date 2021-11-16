import React,{useState} from 'react'
import Video from '../../videos/video3.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement.js';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
        /*Toggle Function*/
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' ></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Portfolio</HeroH1>
                <HeroP>
                    This is my new portfolio website. I will make changes to it.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        Learn More {hover ? <ArrowForward/> : <ArrowRight/>}
                    
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
