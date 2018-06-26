import React from 'react'
import styled from 'styled-components'
import MenuComponent from '../components/MenuComponent'
import HeroCardComponent from '../components/HeroCardComponent'
import {device} from './device'

const HeroContainer = styled.div`
    position: relative;
    background: #173044;
    height: 1050px;


`

const HeroWrapper = styled.div`
    display: flex;

    position: relative;

    flex-direction: column;
    justify-content: space-around;
    
    margin: 0 auto;

    height: 330px;
    width: 60%;
`

const HeroMainText = styled.h1`
    word-spacing: 100vw;
    display: block;
    top: 50px;
    text-decoration: justify;
    text-transform: uppercase;
    color:white;
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
    
    width: 60%;
    margin: auto;    
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

    user-select: none;
    position: absolute;
    bottom: 50px;

    border-radius: 50px ;
`
const ButtonWrapper = styled.div`
    display: flex;
    cursor: pointer;
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
            
            
                <ImgUnderlineOverMainText>
                    <img src={mainText.edges[0].node.underlineImage.file.url}/>
                </ImgUnderlineOverMainText>
                <HeroMainText>
                    {mainText.edges[0].node.text}
                </HeroMainText>
            
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
