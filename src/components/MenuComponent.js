import React from 'react'
import styled from 'styled-components'
import {device} from './device'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  height: 84px;
  
  background: #384653;
  border-radius: 3px;

  text-transform: uppercase;

`
const LogoImg = styled.img`
  margin: 0 20px;  
`
  
const MenuNav = styled.nav`
  position: relative;
  display: flex;

  align-items: center;
  list-style: none;

  @media (max-width: 1024px) {
    display: none;
  }
    
`
const MenuUlATag = styled.a`
  color: #333333;
  text-decoration: none;
  font-size: 14px;
  
  @media ${device.mobileL} { 
    font-size: 10px;
    margin: 0 5px;
  }
`
const ImageSearchButton = styled.img`
  margin: 0 20px;
  cursor: pointer;
`

const LabelToggle = styled.input`
  display: none;

  &:checked + ${MenuNav} > ${Li} > ${MenuUlATag}{
    background: #384653;
    color: white;
    padding: 0;
    margin: 0;
    user-select: none;
  }
  &:checked + ${MenuNav} > ${Li}{
    margin: 0;
    background: #384653;
    color: white;
  }
  &:checked + ${MenuNav } > ${ImageSearchButton}{
    display: none;
  }
  &:checked + ${MenuNav} {
    display: block;
    position: absolute;
    line-height: 100%;
    top: 100px;
  };
`


const Li = styled.li`
  margin: 0;
  background: #384653;
  @media (max-width: 1024px) { 
    &:hover ${Li} {  
      background: black;
    }
    &:hover ${Li} {
      ${MenuUlATag}{
        color: #ffffff;
      }
    }
  }
`

const HamLabel = styled.label`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding-right: 20px;
    cursor: pointer;
  }
  @media (max-width: 768px){
    padding-right: 40px;  
  }
`


const MenuComponent = ({data, img, searchButton}) => {
  return(
    <MenuContainer>    
      
        <HamLabel htmlFor="toggle">
          &#9776;
        </HamLabel>
        <LabelToggle type="checkbox" id="toggle"/>

        <MenuNav>
        {
          data.edges.map((el)=> {
            return(
              <Li key={el.node.text}> 
                <MenuUlATag key = {el.node.text} href="#">
                  {el.node.text} 
                </MenuUlATag>
              </Li>
            )
          })
        }
        <ImageSearchButton
          src={searchButton.edges[0].node.button.file.url} 
          width={searchButton.edges[0].node.button.file.details.image.width}
          height={searchButton.edges[0].node.button.file.details.image.height}
        />

      </MenuNav>

      
      
        <LogoImg 
          src={img.edges[0].node.img.file.url} 
          height={img.edges[0].node.img.file.details.height} 
          width={img.edges[0].node.img.file.details.width}
        />


      {/* <HamLabel htmlFor="toggle">
        &#9776;
      </HamLabel>
      <LabelToggle type="checkbox" id="toggle"/>
     */}
    </MenuContainer>
  )
}
export default MenuComponent;
