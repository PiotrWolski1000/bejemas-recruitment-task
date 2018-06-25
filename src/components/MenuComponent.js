import React from 'react'
import styled from 'styled-components'

const MenuItem = ({text}) => (
  <p>{text}</p>
)

const MenuContainer = styled.div`
  display: block;
  position: relative;
  // display: flex;
  // align-items: center;
  height: 84px;
  width: 100%;
  background: #384653;
  margin: auto;
  border-radius: 3px;
`
const LogoImg = styled.img`
    display: block;
    position: absolute;
    top: 25%;
    left: 0%;
    margin-left: 20px;
  `
  
const MenuNavElementsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 84px;
  `
const MenuNav = styled.nav`
    display: flex;
    // justify-content: center;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    
`
const MenuUlATag = styled.a`
    display: block;
    
    // height: 84px;
    width: 80px;
    color: #333333;
    text-align: center;
    text-decoration: none;
`
const MenuUlLiTag = styled.li`

`
const SearchButton = styled.div`

`
const MenuComponent = ({data, img}) => {
  // console.log("data contentful menu from menu component: ", data)
  return(
    <MenuContainer>
      <LogoImg src={img.edges[0].node.img.file.url} height={img.edges[0].node.img.file.details.height} width={img.edges[0].node.img.file.details.width}/>

      <MenuNavElementsWrapper>
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
        </MenuNav>
        <SearchButton> </SearchButton>            
      </MenuNavElementsWrapper>
    </MenuContainer>
  )
}
export default MenuComponent;
