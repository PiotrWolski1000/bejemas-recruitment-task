import React from 'react'
import styled from 'styled-components'
import {device} from './device'

const SingleCardContainer = styled.div`
    margin: 20px 0;
    display: flex;
    background: #fcfcfc;
    height: 180px;
    font-size: 12px;

    @media ${device.laptop} { 
        margin: 40px 0px;
      }
    
    @media (max-width: 320px){
        margin: 80px 0px;
    }


`
const SingleCardContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ImageCardContent = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
`
const DescriptionCardOffer = styled.div`
    padding-top: 10px;
    color: #777777;
    text-align: justify;
    line-height: 140%;
    padding-right: 20px    
`
const TitleCardOffer = styled.div`
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
`


const WhatWeOfferCardComponent = ({data}) => {
  return(
    <SingleCardContainer>
        <ImageCardContent>
            <img
                src = {data.node.img.file.url}
                width = {data.node.img.file.details.width}
                height = {data.node.img.file.details.height}    
            />
        </ImageCardContent>
        <SingleCardContent>
            <TitleCardOffer>{data.node.title}</TitleCardOffer>
            <DescriptionCardOffer>{data.node.description}</DescriptionCardOffer>
        </SingleCardContent>
    </SingleCardContainer>    
  )
}
export default WhatWeOfferCardComponent;
