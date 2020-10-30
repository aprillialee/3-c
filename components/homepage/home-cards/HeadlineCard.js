import styled from "styled-components";

function HeadlineCard({ headline }) {
  const { API_URL } = process.env

  return(
    <HeadLineCardStyled>
      <ImageContainer><img src={API_URL + headline.image.url}/></ImageContainer>
      <Category>{headline.category}</Category>
      <Date>{headline.date}</Date>
      <Title>{headline.title}</Title>
      <Description>{headline.description}</Description>
    </HeadLineCardStyled>
  )
}

const HeadLineCardStyled = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr) 0.1fr 0.3fr 0.4fr;
`

const ImageContainer = styled.div`
grid-area: 1 / 1 / 3 / 3;

img{
  width: 100%;
  height: 100%;
  border-radius: 13px;
  padding: 10px 10px 0px 10px;
}
`
const Category = styled.div`
grid-area: 3 / 1 / 4 / 2;
color: #5764AF;
padding-left: 18px;
padding-top: 15px;
align-self: end;
font-size: 12px;
font-weight: 600;

@media (max-width: 768px){
  font-size: 9px;
}
`

const Date = styled.div`
grid-area: 3 / 2 / 4 / 3;
color: #4F5576;
font-size: 12px;
justify-self: flex-end;
padding-top: 15px;
padding-right: 18px;
font-weight: 500;

@media (max-width: 768px){
  font-size: 9px;
}
`

const Title = styled.div`
grid-area: 4 / 1 / 5 / 3;
font-size: 28px;
font-weight: 500;
padding-left: 18px;
padding-right: 18px;
line-height: 32px;

@media (max-width: 768px){
  font-size: 15px;
}
`

const Description = styled.div`
 grid-area: 5 / 1 / 6 / 3;
padding-left: 18px;
padding-right: 18px;
padding-bottom: 10px;
font-size: 14px;

@media (max-width: 768px){
  font-size: 12px;
  padding-bottom: 5px;
}
`

export default HeadlineCard;

/*      <Category>LATEST 3D NEWS</Category>
      <Title>Why We No Longer Need 3D Glasses</Title>
      <Subtitle>The 3D virtual world is knocking at everyone's doors. Here's how 3D developers are ensuring that the magic of the 3D world is accessible to everyone with a smart device.</Subtitle>*/