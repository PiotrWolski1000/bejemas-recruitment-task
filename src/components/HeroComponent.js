import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import MenuComponent from '../components/MenuComponent'

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
    bottom: -165px;

    border-top: 1px solid #263d50;
    width: 100%;
    background: #1b2936;
    height: 330px;
`
const HeroComponent = ({menuData, logo, mainText}) => {
    // console.log(mainText.edges[0])
  return(
    <HeroContainer>
        <HeroWrapper>
            <MenuComponent 
                data={menuData.menuData} 
                img={logo}
            />     
            
            <HeroMainTextContainer>
                <HeroMainText>
                    {mainText.edges[0].node.text}{/* strongest distribution ever */}
                </HeroMainText>
            </HeroMainTextContainer>

        </HeroWrapper>
            
        <DarkBackground>
        </DarkBackground>
    </HeroContainer>
  )
}
export default HeroComponent;
