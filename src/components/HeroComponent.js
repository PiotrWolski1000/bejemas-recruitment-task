import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import MenuComponent from '../components/MenuComponent'

const HeroContainer = styled.div`
// display: flex;
display: block;
// flex-direction: column;
background: #173044;
height: 850px;

`
const HeroMainText = styled.h1`
    text-transform: uppercase;
    color:white;
`
const HeroComponent = ({menuData, logo, mainText}) => {
    // console.log(mainText.edges[0])
  return(
    <HeroContainer>
        <MenuComponent data={menuData.menuData} img={logo}/>     
        <HeroMainText>{mainText.edges[0].node.text}</HeroMainText>
        
    </HeroContainer>
  )
}
export default HeroComponent;
