import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import MenuComponent from '../components/MenuComponent'
import HeroCardComponent from '../components/HeroCardComponent'

const HeroContainer = styled.div`
    position: relative;
    background: #173044;
    height: 1050px;
`

const HeroWrapper = styled.div`
    display: flex;

    position: relative;

    flex-direction: column;
    justify-content: flex-end;

    margin: 0 auto;

    height: 330px;
    width: 60%;
`
const HeroMainTextContainer = styled.div`    
    width: 100%;
`
    
const HeroMainText = styled.h1`
    display: block;

    top: 50px;
    width: 40%;
    text-decoration: justify;
    text-transform: uppercase;
    color:white;
    
    line-height: 95%;
`

const DarkBackground = styled.div`
    position: absolute;
    bottom: 0px;
    
    border-top: 1px solid #263d50;
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;

    background: #1b2936;
`
const HeroCardsWrapper = styled.div`
    position: relative;
    display: flex;
    // flex-direction: column;//ciekawe-rodzic powinien miec space-between
    
    width: 60%;
    // max-width: 60%;
    margin: auto;

    // justify-content: space-around;
    // align-items: space-between;
    
`
const HeroCardsMainWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: -215px;

    display: flex;
    justify-content: space-between;//chyba tak
    items-align: center;
`
const HeroSectionButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 215px;
    height: 60px;
    background: #FDC300;

    text-transform: uppercase;
    color: white;
    font-size: 14px;
    font-weight: bold;

    position: absolute;
    bottom: 50px;

    border-radius: 50px ;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const ImgUnderlineOverMainText = styled.div`
    position: relative;
    top: 20px;
`
const HeroComponent = ({menuData, logo, mainText, heroCardsData, button, searchButton}) => {
  return(
    <HeroContainer>
        <HeroWrapper>
            <MenuComponent 
                data={menuData} 
                img={logo}
                searchButton={searchButton}
            />     
            
            <HeroMainTextContainer>
                <ImgUnderlineOverMainText>
                    <img src={mainText.edges[0].node.underlineImage.file.url}/>
                </ImgUnderlineOverMainText>
                <HeroMainText>
                    {mainText.edges[0].node.text}
                </HeroMainText>
            </HeroMainTextContainer>

        </HeroWrapper>
            
        <DarkBackground>
            <HeroCardsMainWrapper>
                <HeroCardsWrapper>
                {
                    heroCardsData.edges.map((cardData) => {
                        return(
                            <HeroCardComponent key={cardData.node.title} heroCardData={cardData}/>
                        )
                    })
                }
                </HeroCardsWrapper>
            </HeroCardsMainWrapper>

            <ButtonWrapper>
                <HeroSectionButton>
                    {button.edges[0].node.text}
                    
                </HeroSectionButton>
            </ButtonWrapper>

        </DarkBackground>

    
    </HeroContainer>
  )
}
export default HeroComponent;
