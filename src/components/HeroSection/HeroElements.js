import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward,} from 'react-icons/md'
import DarkBG from '../../images/dark_bg.jpg'

export const HeroContainer = styled.div`
    background: #252038;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 30px;
    height: 100vh;
    z-index: 1;

`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 
export const HeroH1 = styled.h1`
    font-size: 80px;
    text-align: center;
    color: transparent;
	-webkit-text-stroke: 2px #fff;

    @media screen and (max-width: 738px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const HeroName = styled.h1`
    font-size: 100px;
    text-align: center;
    color: #fff;


    @media screen and (max-width: 738px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 5s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export const HeroImgsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;

    img{
        margin: 5px;
        animation: fadeIn 5s;
    }
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const SubHeading = styled.p`
    text-transform: uppercase;
    font-size: 18px;
    line-height: 35px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 3px;
    animation: fadeIn 5s;
    color: #6C63FF;
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export const BottomRightElement = styled.img`
    margin: 0 auto;
    opacity: 0.2;
    z-index: 0;
    position: absolute;
    right: -15px;
    bottom: 0;
    animation: moveLeft 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveLeft {
        0% {
            bottom: 0;
            right: -15px;
        }
        50% {
            right: 0;
            bottom: 0;
        }
        100% {
            bottom: 0;
            right: -15px;
        }
    }
    
`


export const ElementTwo = styled.img`
    opacity: 0.3;
    right: -10px;
    bottom: 0;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    animation: moveRight 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveRight {
        0% {
            bottom: 0;
            right: -10px;
        }
        50% {
            right: 0;
            bottom: 0;
        }
        100% {
            bottom: 0;
            right: -10px;
        }
        }
    }
`
export const ElementThree = styled.img`
    left: -10px;
    top: 0;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    opacity: 0.5;
    
    animation: moveAround 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveAround {
        0% {
            top: 0;
            left: -10px;
        }
        50% {
            left: 0;
            top: 0;
        }
        100% {
            top: 0;
            left: -10px;
        }
        }
    }
`
export const ElementFour = styled.img`
    left: 0;
    top: -10px;
    position: absolute;
    margin: 0 auto;
    z-index: 0;
    opacity: 0.5;
    animation: moveDown 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveDown{
        0% {
            top: -10px;
            left: 0;
        }
        50% {
            left: 0;
            top: 0;
        }
        100% {
            top: -10px;
            left: 0;
        }
        }
    }
`

export const ElementFive = styled.img`
    opacity: 0.2;
    right: 0;
    top: 0;
    position: absolute;
    margin: 0 auto;
    z-index: 0;
    
`
export const ElementSix = styled.img`
    opacity: 0.3;
    right: 0;
    top: 0;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
`