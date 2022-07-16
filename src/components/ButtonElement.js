import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border: 2px solid #6C63FF;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #6C63FF;
    }
    
`;