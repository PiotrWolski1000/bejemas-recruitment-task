import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import MenuComponent from '../components/MenuComponent'
import HeroCardComponent from '../components/HeroCardComponent'

const HeroContainer = styled.div`
    position: relative;
    background: #173044;
    height: 850px;
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
    display: block;
    position: absolute;
    bottom: 0px;
    border-top: 1px solid #263d50;
    width: 100%;
    background: #1b2936;
    height: 330px;
`
const HeroComponent = ({menuData, logo, mainText, heroCardsData}) => {
    // console.log("menu data: ", menuData)
  return(
    <HeroContainer>
        <HeroWrapper>
            <MenuComponent 
                data={menuData} 
                img={logo}
            />     
            
            <HeroMainTextContainer>
                <HeroMainText>
                    {mainText.edges[0].node.text}{/* strongest distribution ever */}
                </HeroMainText>
            </HeroMainTextContainer>

        </HeroWrapper>
            
        <DarkBackground>
            {
                heroCardsData.edges.map((cardData) => {
                    return(
                        <HeroCardComponent key={cardData.node.title} heroCardData={cardData}/>
                    )
                })
            }
        </DarkBackground>
    </HeroContainer>
  )
}
export default HeroComponent;
