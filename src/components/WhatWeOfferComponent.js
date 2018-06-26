import React from 'react'
import WhatWeOfferCardComponent from './WhatWeOfferCardComponent'
import styled from 'styled-components'
import {device} from './device'
const WhatWeOfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    height: 100%;
    width: 60%;
    margin: auto;

`
const Main = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`
const H2Tag = styled.h2`
  color: #333333;
  text-transform: capitalize;
  font-size: 20px;
`
const PSubtitleTag = styled.p`
  text-transform: uppercase;
  color: #888888;
  font-size: 16px;
`
const WhatWeOfferCardsContainer = styled.div`
  display: grid;
  grid: auto / auto auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
  }
`

const WhatWeOfferWrapper = styled.div`
  display: block;  
  width: 100%;
  min-height: 100%;
  margin: auto;
`


const WhatWeOfferComponent = ({cards, mainInfo}) => {
  return(
    <WhatWeOfferWrapper>
      <WhatWeOfferContainer>
        <Main>
          <H2Tag>{mainInfo.edges[0].node.title}</H2Tag>
          <PSubtitleTag>{mainInfo.edges[0].node.subtitle}</PSubtitleTag>
          <img
            src={mainInfo.edges[0].node.underlineImageWhatWeOffer.file.url} 
            width={mainInfo.edges[0].node.underlineImageWhatWeOffer.file.details.width}
            height={mainInfo.edges[0].node.underlineImageWhatWeOffer.file.details.height}
            />           
        </Main>

        <WhatWeOfferCardsContainer>
          {cards.edges.map((card)=> {
            return(
              <WhatWeOfferCardComponent
              key = {card.node.title}
              data = {card}
              />
            )
          })}
        </WhatWeOfferCardsContainer>


      </WhatWeOfferContainer>
    </WhatWeOfferWrapper>
  )
}
export default WhatWeOfferComponent;
