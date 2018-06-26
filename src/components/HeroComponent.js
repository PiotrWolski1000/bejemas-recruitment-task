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

    @media (max-width: 425px){
        font-size: 28px;
    }

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
    f;ex-direction: row-reverse;
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

    @media (max-width: 320px){
        width: 100px;
        height: 30px;
        font-size: 10px;
    }

    @media (max-width: 425px){
        width: 125px;
        height: 35px;
        font-size: 10px;
    }

    @media (max-width: 768px){
        width: 150px;
        height: 45px;
        font-size: 10px;
    }

    @media (max-width: 1024px){
        width: 175px;
        height: 55px;
        font-size: 10px;
    }
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
