import styled from 'styled-components'
import { keyframes } from 'styled-components';

export const zoomInFade = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0.95;
  }
`

export const zoomInBackground = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`

export const opacityFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledTimelineIcon = styled.img`
    height: 35px;
    width: auto;
    opacity: 1;
    cursor: pointer;
    z-index: 1; 
    position: relative;
    align-items: center;
    animation: ${zoomInFade} 3s ease-in-out;

`
export const IconBackground = styled.div`;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: radial-gradient(#6C63FF, #010606);
  opacity: 0.5;
  height: 70px;
  width: 70px;
  z-index: 0;
  animation: ${zoomInBackground} 1.5s ease-in-out;
`

export const TimelineHeading = styled.p`
    line-height: 35px;
    text-align: left;
    position: relative;
    font-size: 21px;
    letter-spacing: 1.4px;
    opacity: 0.9;
    color: white;
    animation: fadeIn 4s ease-in;
`

export const TimelineSubheading = styled.p` 
    text-align: left;
    position: relative;
    display: flex;
    font-size: 17px;
    line-height: 35px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 3px;
    animation: fadeIn 5s;
    color: #6C63FF;
    animation: fadeIn 4s ease-in;
`

export const Timeframe = styled.p`
    line-height: 35px;
    text-align: left;
    position: relative;
    font-weight: 100;
    font-size: 14px;
    letter-spacing: 1.4px;
    opacity: 0.9;
    color: white;
    animation: fadeIn 4s ease-in;
`

export const Milestone = styled.div`
    display: flex;
    flex-direction: row;
    animation: ${opacityFade} 3s ease-in;

`
export const DescWrapper = styled.div`
    margin-left: 85px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const lineTransition = keyframes`
    from {
        height: 0px;
    }
    to {
        height: 200px;
    }
`
export const StyledLine = styled.div`
    background-image: linear-gradient(#6C63FF 0%, #6C63FF 50%, #2E2A7A 70%, #242066 85%, #010606 100%);
    border-radius: 5px;
    height: 10px;
    max-height: 300px;
    min-width: 4px;
    width: 4px;
    margin-top: 15px;
    margin-left: 30px;
    
    &.animated {
        animation-delay: 5s;
        animation: ${lineTransition} 1.5s ease-in forwards;
    }
`


export const Timeline = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    height: 1000px;
`
export const TimelineBackground = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    height: 1000px;
    padding-left: 200px; 
`

export const Illustration = styled.img`
    
`