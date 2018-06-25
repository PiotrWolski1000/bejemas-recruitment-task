import React from 'react'
import styled from 'styled-components'

const SingleCardContainer = styled.div`
    display: flex;
    padding: 10px;
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
    jusitfy-content: center;
`
const ImageCardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 40%;
    height: 100%;
`
const CardImage = styled.img`
    display: flex;  
    align-items: center;
    justify-content: flex-start;
`
const DescriptionCardOffer = styled.div`
    padding: 0px 10px
    padding-top: 10px;
    color: #777777;
    text-align: justify;
    line-height: 140%;
`
const TitleCardOffer = styled.div`
    padding: 0px 10px
    
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;

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
