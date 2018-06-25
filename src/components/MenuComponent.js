import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  // display: block;
  
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  // font-decoration: capitalize;
  text-transform: uppercase;
  height: 84px;
  width: 100%;
  background: #384653;
  margin: 0 auto;
  border-radius: 3px;
`
const LogoImg = styled.img`
    // display: flex;
    // align-items: center;
    // position: absolute;
    // top: 25%;
    // left: 0%;
    // margin-left: 20px;
  `
  
const MenuNavElementsWrapper = styled.div`
    // position: relative;
    // width: 100%;
`
const MenuNav = styled.nav`
    // width: 100%;
    display: flex;
    padding-right: 50px;
    // justify-content: flex-end;
    // justify-content: space-around;
    // align-items: center;
    list-style: none;
    
`
const MenuUlATag = styled.a`
    // display: block;
    // height: 84px;
    // width: 150px;
    // width: 100%;
    // text-align: center;
    padding-left: 20px
    color: #333333;
    text-decoration: none;
`
const MenuUlLiTag = styled.li`
  height: 100%;
  width: 100%;
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
        {/* <SearchButton><img src={} /></SearchButton>             */}
      </MenuNavElementsWrapper>
    </MenuContainer>
  )
}
export default MenuComponent;
