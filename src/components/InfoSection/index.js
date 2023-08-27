import React, { Fragment, useRef, useState, useEffect} from 'react'
import { InfoContainer,InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, BtnWrap, ImgWrap, Img, HeadLine} from './InfoElements'
import {Button} from '../ButtonElement.js';
import {useInView} from 'react-intersection-observer';
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    
    const { ref: myRef, inView: elementIsVisible } = useInView({
        threshold: 0.2,
        triggerOnce: true
      });


    return (
        <Fragment>
            <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper ref={myRef} className={`${elementIsVisible ? 'animated' : ''}`}>
                                <TopLine>{topLine}</TopLine>
                                <HeadLine lightText = {lightText}>
                                {headLine}
                                </HeadLine>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} ref={myRef} className={`${elementIsVisible ? 'zoomed' : ''}`}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </Fragment>
    )
}

export default InfoSection
