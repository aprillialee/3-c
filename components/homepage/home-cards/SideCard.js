import styled from "styled-components";

function SideCard({ feature }) {
  const { API_URL } = process.env
  return(
    <SideCardStyled>
      <ImageContainer>
        <img src={API_URL + feature.image.url}/>
      </ImageContainer>
      <Category>
        {feature.category}
      </Category>
      <Date>
        {feature.date}
      </Date>
      <Title>
        {feature.title}
      </Title>
      <Subtitle>
        {feature.description}
      </Subtitle>
    </SideCardStyled>
  )
};

const SideCardStyled = styled.div`
width: 100%;
height: 100%;
display: grid;
display: grid;
grid-template-columns: repeat(2, 0.7fr) repeat(2, 0.8fr) 0;
grid-template-rows: 0.2fr repeat(2, 0.5fr) 0 ;
grid-column-gap: 2px;
grid-row-gap: 2px;
padding-bottom: 10px;
`

const ImageContainer = styled.div`
width: 100%;
height: 100%;
grid-area: 1 / 1 / 4 / 3;

img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
  padding: 10px;
}
`

const Category = styled.div`
grid-area: 1 / 3 / 2 / 4;
color: #5764AF;
font-size: 10px;
font-weight: 600;
align-self: end;
`

const Date = styled.div`
grid-area: 1 / 4 / 2 / 5;
color: #4F5576;
font-size: 10px;
font-weight: 600;
align-self: end;
justify-self: end;
`

const Title = styled.div`
grid-area: 2 / 3 / 3 / 5;
font-size: 16px;
font-weight: 500;
`

const Subtitle = styled.div`
grid-area: 3 / 3 / 4 / 5;
font-size: 10px;
`

export default SideCard;
