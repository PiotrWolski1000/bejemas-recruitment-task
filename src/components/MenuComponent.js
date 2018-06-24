import React from 'react'
import styled from 'styled-components'

const MenuItem = ({text}) => (
  <p>{text}</p>
)

const MenuContainer = styled.div`
  display: block;
  height: 84px;
  width: 80%;
  position:relative;
  top: 20px;
  background: #384653;
  margin: auto;
  // align-items: center;
  //   justify-content: center;
  border-radius: 3px;
`
const LogoImg = styled.img`

`

const MenuComponent = ({data, img}) => {
  // console.log(img)
  // console.log('img edges', img.edges[0])
  return(
    <MenuContainer>
      <div >
      {/* style={{background: 'rebeccapurple',}} */}
          <LogoImg src={img.edges[0].node.img.file.url} height={img.edges[0].node.img.file.details.height} width={img.edges[0].node.img.file.details.width}/>

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
