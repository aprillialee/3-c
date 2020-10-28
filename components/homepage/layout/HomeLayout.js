import styled from "styled-components"

function HomeLayout() {
  return(
  <HomeLayoutStyled>
    <Item1>Hello</Item1>
    <Item2>Hello</Item2>
    <Item3>Hello</Item3>
    <Item4>Hello</Item4>
    <Item5>Hello</Item5>
    <Item6>Hello</Item6>
    <Item7>Hello</Item7>
  </HomeLayoutStyled>
  )
}

const HomeLayoutStyled = styled.div`
width: 75%;
height: 100vh;
background: red;
margin: auto;
display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

@media (max-width: 768px) {
  display: flex;
  flex-direction: column; 
}
`
const Item1 = styled.div`
width: 100%;
height: 100%;
background: green;
grid-area: 1 / 1 / 4 / 5;
`

const Item2 = styled.div`
width: 100%;
height: 100%;
background: pink;
grid-area: 1 / 5 / 2 / 7; 
`
const Item3 = styled.div`
width: 100%;
height: 100%;
background: orange;
grid-area: 2 / 5 / 3 / 7;
`

const Item4 = styled.div`
width: 100%;
height: 100%;
background: blue;
grid-area: 3 / 5 / 4 / 7;
`
const Item5 = styled.div`
width: 100%;
height: 100%;
background: purple;
grid-area: 4 / 1 / 6 / 3; 
`
const Item6 = styled.div`
width: 100%;
height: 100%;
background: yellow;
grid-area: 4 / 3 / 6 / 5; 
`
const Item7 = styled.div`
width: 100%;
height: 100%;
background: gold;
grid-area: 4 / 5 / 6 / 7;
`

export default HomeLayout;