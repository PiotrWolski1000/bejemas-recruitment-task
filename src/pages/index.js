import React from 'react'
// import Link from 'gatsby-link'
import MenuComponent from '../components/MenuComponent'
const indexPage = ({data}) => {
    console.log("the whole data: ", data)
    return (

        <MenuComponent data={data.allContentfulMenu} img={data.allContentfulLogo}/>
        
        // <nav>
        //     {data.allContentfulMenu.edges.map((el)=> {<b> console.log(el.node) </b>})}
        //     <p>hello world</p>
        // </nav>
    )
}

export default indexPage


export const query = graphql`
query section1{
  allContentfulMenu {
    edges {
      node {
        text
      }
    }
  }
  allContentfulLogo{
	  edges {
	    node {
	  		img {
        	file{
            url
            details{
              image{
                width
                height
              }
            }
          }  
	  		}    
	    }
	  }
	}
}
`