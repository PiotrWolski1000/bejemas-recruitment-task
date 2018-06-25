import React from 'react'
import styled from 'styled-components'

const SingleCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
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
  // display: flex;
  // justify-content: center;
  // align-items: center;
`
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  height: 185px; 

  font-size: 16px;
  text-align: justify;
  justify-content: space-around;

    
  @media (max-width: 650px) {
    font-size: 10px;
  }

    
  @media (max-width: 1100px) {
    font-size: 12px;
  }

`
const ReadMoreImage = styled.img`
  padding: 0;
  margin: 0;
 
`

const CardTitle = styled.div`
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 20px;
  
`
const CardDescription = styled.div`
  color: #777777;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 100%;
`

const CardUnderlineImage = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`
const Img = styled.img`
  margin: 0;
  padding: 0;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;

  align-items: space-between;
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
