import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  
  // position: relative;
  
  // top: -20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 84px;
  width: 100%;

  background: #384653;
  border-radius: 3px;
  
  text-transform: uppercase;
`
const LogoImg = styled.img`
  margin: 0 20px;  
`
  
const MenuNav = styled.nav`
    display: flex;
  
    align-items: center;
    list-style: none;
    
`
const MenuUlATag = styled.a`
    // padding-left: 20px
    color: #333333;
    text-decoration: none;
    font-size: 14px;

    margin: 0 5px;

    @media (max-width: 1442px) {
      padding-left: 5px;
    }

    @media (max-width: 1100px) {
      font-size: 12px;
    }
    
    @media (max-width: 700px) {
      font-size: 8px;
    }


`
const ImageSearchButton = styled.img`
  margin: 0 20px;
  cursor: pointer;
`

const ImageSearchButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const MenuComponent = ({data, img, searchButton}) => {
  return(
    <MenuContainer>    
      <LogoImg 
        src={img.edges[0].node.img.file.url} 
        height={img.edges[0].node.img.file.details.height} 
        width={img.edges[0].node.img.file.details.width}
      />
      
      <MenuNav>
        {
          data.edges.map((el)=> {
            return(
              <li key={el.node.text}> 
                <MenuUlATag key = {el.node.text} href="#">
                  {el.node.text} 
                </MenuUlATag>
              </li>
            )
          })
        }

        <ImageSearchButtonWrapper>
          <ImageSearchButton
            src={searchButton.edges[0].node.button.file.url} 
            width={searchButton.edges[0].node.button.file.details.image.width}
            height={searchButton.edges[0].node.button.file.details.image.height}
        />
        
          </ImageSearchButtonWrapper>
      

      </MenuNav>
    </MenuContainer>
  )
}
export default MenuComponent;
