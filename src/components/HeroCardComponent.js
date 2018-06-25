import React from 'react'
import styled from 'styled-components'

const SingleCardContainer = styled.div`
  // display: block;
  // display: inline;
  // width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  

  background: red;
  // width: 60%;
  width: 360px;
  // height: 400px;-to chyba powodowalo wychodzenie tekstu za diva przy skalowaniu

`
const UpperSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: #dededd;
  width: 100%;
  height: 215px;
`
const BottomSectionWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 185px; 

  font-size: 16px;
  text-align: justify;
`
const ReadMoreImage = styled.img`
  padding: 0;
  margin: 0;
 
`

const CardTitle = styled.div`
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 5px;
`
const CardDescription = styled.div`
  color: #777777;
  margin-left: 5px;
  margin-right: 10px;
  line-height: 100%;
`

const CardUnderlineImage = styled.div`
  margin-left: 5px;
`
const Img = styled.img`
  margin: 0;
  padding: 0;
`
const Wrapper = styled.div`
width: 100%;
height: 50px;
background:red;
display: block;

// display: flex;
// flex-direction: column;
`

const HeroCardComponent = ({heroCardData}) => {
    // console.log("single card component data: ", heroCardData)
    // console.log(heroCardData.node.underlineImage.file.url)
  return(
    <Wrapper>
      <SingleCardContainer>
        <UpperSection>
          <ReadMoreImage src={heroCardData.node.readMoreImage.file.url}/>
        </UpperSection>
        <BottomSectionWrapper>
          <BottomSection>
            <CardUnderlineImage>
              <Img src={heroCardData.node.underlineImage.file.url}/>
            </CardUnderlineImage>
            <CardTitle> {heroCardData.node.title} </CardTitle>
            <CardDescription> <p>{heroCardData.node.description} </p></CardDescription>
            
          </BottomSection>
        </BottomSectionWrapper>
      </SingleCardContainer> 
    </Wrapper>   
  )
}
export default HeroCardComponent;
