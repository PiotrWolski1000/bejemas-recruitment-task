import React from 'react'
import HeroComponent from '../components/HeroComponent';
import WhatWeOfferComponent from '../components/WhatWeOfferComponent';

import Link from 'gatsby-link'

const indexPage = ({data}) => {
    console.log("the whole data: ", data)
    return (

        <div>
          <HeroComponent 
            menuData={data.allContentfulMenu} 
            logo={data.allContentfulLogo}
            mainText={data.allContentfulMainText}
          />

          <WhatWeOfferComponent
          />

        </div>
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
  allContentfulMainText{
	  edges {
	    node {
    	  text      
      }
    }
	}
}
`