import React,{useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1,HeroName, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, SubHeading, HeroImgsWrapper} from './HeroElements'
import {Button} from '../ButtonElement.js';
import GitHub from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Typewriter from "typewriter-effect";
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
        /*Toggle Function*/
    }

    return (
        <HeroContainer>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroName>
                    <Typewriter
                        onInit={(typewriter) =>{
                            typewriter.typeString("Hi, I'm Alex.")
                            .callFunction(function(state) {
                                state.elements.cursor.style.display = 'none';
                            })
                            .start();
                        }}
                    />
                </HeroName>
                <SubHeading>Full Stack Software Engineer</SubHeading>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        About Me {hover ? <ArrowForward/> : <ArrowRight/>}
                    
                    </Button>
                </HeroBtnWrapper>
                <HeroImgsWrapper>
                    <img src={GitHub} style={{width: '42px'}}/>
                    <img src={LinkedIn} style={{width: '42px'}}/>
                </HeroImgsWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
