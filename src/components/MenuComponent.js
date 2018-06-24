import React from 'react'
import styled from 'styled-components'

const MenuItem = ({text}) => (
  <p>{text}</p>
)

const MenuContainer = styled.div`
  display: block;
  position: relative;
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

const MenuComponent = ({data, img}) => {
  return(
    <MenuContainer>
      <div >
          <LogoImg src={img.edges[0].node.img.file.url} height={img.edges[0].node.img.file.details.height} width={img.edges[0].node.img.file.details.width}/>

          {/* <nav>
            {data.allContentfulMenu.edges.map((el)=> {<b> console.log(el.node) </b>})}
            <p>hello world</p>
          </nav> */}

          <nav>
            {/* <MenuItem/> */}
            <ul>
              {/* {data.map((text)=> { */}
                {/* text */}
              {/* })} */}



            </ul>
          </nav>
        </div>
    </MenuContainer>
  )
}
export default MenuComponent;
