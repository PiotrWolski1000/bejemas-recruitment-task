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
  cursor: pointer; 
`

const CardTitle = styled.div`
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 10px;
  line-height: 100%;
  
  @media (max-width: 500px) {
    font-size: 10px;
  }

  @media (max-width: 320px){
    font-size: 7px;
    margin-left: 5px;
  }

  

`
const CardDescription = styled.div`
  color: #777777;
  margin: 0 10px;
  line-height: 100%;

  @media (max-width: 500px) {
    font-size: 8px;
  }

  @media (max-width: 720px) {
    font-size: 9px;
  }

  @media (max-width: 320px){
    font-size: 6px;
    margin-left: 5px;
  }

`

const CardUnderlineImage = styled.div`
  margin-left: 10px;
  // margin-right: 20px;
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
  return(
    <Wrapper>
      <SingleCardContainer>
        <UpperSection>
          <ReadMoreImage src={heroCardData.node.readMoreImage.file.url}/>
        </UpperSection>
          <BottomSection>
            <CardUnderlineImage>
              <Img src={heroCardData.node.underlineImage.file.url}/>
            </CardUnderlineImage>
            <CardTitle> {heroCardData.node.title} </CardTitle>
            <CardDescription> <p>{heroCardData.node.description} </p></CardDescription>
            
          </BottomSection>
      </SingleCardContainer> 
    </Wrapper>   
  )
}
export default HeroCardComponent;
