import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const StyledHoverableCard = styled.img`
    position: relative;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    z-index: -0.5;
    opacity: 0.8;
`
export const CardWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
`
export const CardContent  = styled.div`{
    background: transparent;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    padding: 42px;
    color: white;
    opacity: 0;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    &:hover {
        opacity: 1;
        transition: opacity 0.7s ease-in;
        cursor: pointer;
    }

    &:hover ~ ${StyledHoverableCard } {
        transform: scale(1.02);
        opacity: 1;
        transition: all 0.2s ease-in-out;
        
    }
  }
`

export const CardTitle = styled.h1`{
  }
`
export const CardText = styled.p`{
    
  }
`

export const TextContent = styled.div`{
    margin-left: 50px;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
  }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

