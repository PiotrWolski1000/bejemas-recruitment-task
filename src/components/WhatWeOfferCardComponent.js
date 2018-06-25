import React from 'react'
import styled from 'styled-components'

const SingleCardContainer = styled.div`
    display: flex;
    background: #fcfcfc;
    margin: auto;
    width: 360px;
    height: 180px;
    font-size: 12px;

`
const SingleCardContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`
const ImageCardContent = styled.div`
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 40%;
    height: 100%;
    margin: auto;
`
const CardImage = styled.img`
    display: block;  
    // align-items: center;
    // justify-content: center;
    margin: auto;
`
const DescriptionCardOffer = styled.div`
    color: #777777;
    text-align: justify;
`
const TitleCardOffer = styled.div`
    color: #333333;
    font-weight: bold;
    text-transform: uppercase;

`


const WhatWeOfferCardComponent = ({data}) => {
  return(
    <SingleCardContainer>
        <ImageCardContent>
            <CardImage
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
