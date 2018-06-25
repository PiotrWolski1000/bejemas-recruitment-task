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
    display: block;
    width: 50%;
    height: 100%;
    margin: auto;
`
const CardImage = styled.img`
    display: block;  
    // align-items: center;
    // justify-content: center;
    margin: auto;
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
            <b>{data.node.title}</b>
            <p>{data.node.description}</p>
        </SingleCardContent>
    </SingleCardContainer>    
  )
}
export default WhatWeOfferCardComponent;
