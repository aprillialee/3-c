import styled from "styled-components";

function MediumCard() {
  return(
  <MediumCardStyled>
    <Category>INSPIRATION</Category>
    <ImageContainer>
      <img src="./inspiration.jpeg"/>
    </ImageContainer>
  </MediumCardStyled>
  )
};

const MediumCardStyled = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr) repeat(3, 0);
grid-template-rows: 0.1fr 1fr repeat(2, 0);
`

const Category = styled.div`
grid-area: 1 / 1 / 2 / 2;
color: #5764AF;
font-size: 12px;
font-weight: 600;
align-self: end;
padding-left: 10px;
`

const ImageContainer = styled.div`
grid-area: 2 / 1 / 3 / 3;

img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
}
`

export default MediumCard;