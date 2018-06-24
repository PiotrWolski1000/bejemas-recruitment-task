import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MenuItem = ({text}) => (
  <p>{text}</p>
)

const Container = styled.div`
  background: blue;
`

const MenuComponent = ({data, img}) => {
  // console.log(img)
  // console.log('img edges', img.edges[0])
  return(
    <Container>
      <div >
      {/* style={{background: 'rebeccapurple',}} */}
          <img src={img.edges[0].node.img.file.url} height={img.edges[0].node.img.file.details.height} width={img.edges[0].node.img.file.details.width}/>

          <nav>
            {/* <MenuItem/> */}
            <ul>
              {/* {data.map((text)=> { */}
                {/* text */}
              {/* })} */}
            </ul>
          </nav>
        </div>
    </Container>
  )
}
export default MenuComponent;
