import styled from 'styled-components'
import { keyframes } from 'styled-components';



export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#252038' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    height: 100vh;
`
export const InfoWrapper = styled.div`
    background: transparent;
    display: grid;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    z-index: 5;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    &.animated {
        animation: ${slideInRight} 0.6s ease-in-out forwards;
      }

`
// Lilac Purple Top Line Heading
export const TopLine = styled.p`
    color: #6C63FF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

// Main Headings for Info Section
export const HeadLine = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
// About Me Paragraph
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    color: #fff;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const zoomIn = keyframes`
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const Img = styled.img`
  float: right;
  width: 100%;
  height: auto;
  padding-right: 0;
  transform: scale(0.9); /* Set initial scale to 0.9 */
  &.zoomed {
    animation: ${zoomIn} 0.6s ease-in-out forwards;
    transform: scale(1); /* Set final scale to 1 */
  }
`;


export const ElementEight = styled.img`
    opacity: 0.3;
    right: 5px;
    position: absolute;
    margin: 0 auto;
    z-index: 0;
    animation: moveLeft 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveLeft {
        0% {
            
            right: -15px;
        }
        50% {
            right: 0;
            
        }
        100% {
            
            right: -15px;
        }
    }
`
export const ElementSeven = styled.img`
    right: 5px;
    opacity: 0.3;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    animation: moveLeft 4s ease-in;
    animation-iteration-count: infinite;
    @keyframes moveLeft {
        0% {
            
            right: -15px;
        }
        50% {
            right: 0;
            
        }
        100% {
            
            right: -15px;
        }
    }
  `

