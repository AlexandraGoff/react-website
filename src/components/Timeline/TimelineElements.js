import styled from 'styled-components'

export const Timeline = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 30px;
    height: 800px;
    z-index: 1;
`
export const Img = styled.img`
    width: 42px;
    cursor: pointer;
    position: relative;
`
export const Line = styled.div`
    border-left: 6px solid green;
    height: 500px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 0;
`