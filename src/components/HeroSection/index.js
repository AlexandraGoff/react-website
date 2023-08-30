import React, {useState} from 'react'
import { BottomRightElement, ElementTwo, ElementFive, ElementSix, ElementFour, ElementThree} from './HeroElements'
import { HeroContainer, HeroBg, HeroContent, HeroH1,HeroName, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, SubHeading, HeroImgsWrapper, animateHeading} from './HeroElements'
import {Button} from '../ButtonElement.js';
import GitHub from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Typewriter from "typewriter-effect";
import bottomRightElement from '../../images/test1.svg'
import topLeftElement from '../../images/Element1.svg'
import elementFive from '../../images/Element5.svg'
import elementSix from '../../images/Element6.svg'
import elementFour from '../../images/Element4.svg'
import elementThree from '../../images/Element3.svg'
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
                <SubHeading>Junior Software Developer</SubHeading>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        Contact Me {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                <HeroImgsWrapper>
                <a href="http://github.com/AlexandraGoffova" id="GitHub"><img src={GitHub} style={{width: '42px', cursor: 'pointer'}}/></a>
                <a href="https://www.linkedin.com/public-profile/settings" id="GitHub"><img src={LinkedIn} style={{width: '42px', cursor: 'pointer'}}/></a>
                </HeroImgsWrapper>
            </HeroContent>
            <ElementThree src={elementThree}/>
            <ElementFour src={elementFour}/>
            <ElementSix src={elementSix}/>
            <ElementFive src={elementFive}/>
            <BottomRightElement src={bottomRightElement}/>
            <ElementTwo src={topLeftElement}/>
            
        </HeroContainer>
    )
}

export default HeroSection
