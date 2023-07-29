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

export const StyledTimelineIcon = styled.img`
    height: 35px;
    width: auto;
    opacity: 0.95;
    cursor: pointer;
    z-index: 1; 
    position: absolute;
    display: ${props => (props.show ? 'block' : 'none' )};
    animation: ${zoomInFade} 3s ease-in-out;

`
export const IconBackground = styled.div`
    background: radial-gradient(#6C63FF, #010606);
    opacity: 0.5;
    height: 70px;
    width: 70px;
    position: relative;
    z-index: 0;
    animation: ${zoomInBackground} 1.5s ease-in-out;
    display: ${props => (props.show ? 'flex' : 'none' )};
    justify-content: center; 
    align-items: center; 
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
    
    &.animated {
        animation: ${lineTransition} 1.5s ease-in forwards;
    }
`


export const Timeline = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    height: 800px;
`

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    display: ${props => (props.show ? 'flex' : 'none' )};
`