import styled from "styled-components"

import HeadlineCard from "../home-cards/HeadlineCard"
import SideCard from "../home-cards/SideCard"
import MediumCard from "../home-cards/MediumCard"

function HomeLayout() {
  return(
  <HomeLayoutStyled>
    <Item1>
      <HeadlineCard/>
    </Item1>
    <Item2>
      <SideCard/>
    </Item2>
    <Item3>
      <SideCard/>
    </Item3>
    <Item4>
      <SideCard/>
    </Item4>
    <Item5>
      <MediumCard/>
      </Item5>
    <Item6>
      <MediumCard/>
    </Item6>
    <Item7>
      <MediumCard/>
    </Item7>
    <Item8>
      <MediumCard/>
      </Item8>
    <Item9>
      <MediumCard/>
    </Item9>
    <Item10>
      <MediumCard/>
    </Item10>
  </HomeLayoutStyled>
  )
}

const HomeLayoutStyled = styled.div`
width: 80%;
height: auto;
margin: 0 auto -100px;
margin-top: 25px;
display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
}
`
const Item1 = styled.div`
width: 100%;
height: 100%;
border: 0.1px solid #EAEAEA;
box-shadow: 0.1px 0.1px 1px;
background: #FAFAFA;
border-radius: 10px;
grid-area: 1 / 1 / 4 / 5;
@media (max-width: 768px) {

}
`

const Item2 = styled.div`
width: 100%;
height: 100%;
border-bottom: 0.1px solid #EAEAEA;
grid-area: 1 / 5 / 2 / 7;
`
const Item3 = styled.div`
width: 100%;
height: 100%;
border-bottom: 0.1px solid #EAEAEA;
grid-area: 2 / 5 / 3 / 7;
`
const Item4 = styled.div`
width: 100%;
height: 100%;
border-bottom: 0.1px solid #EAEAEA;
grid-area: 3 / 5 / 4 / 7;
`
const Item5 = styled.div`
width: 100%;
height: 100%;
grid-area: 4 / 1 / 6 / 3;
`
const Item6 = styled.div`
width: 100%;
height: 100%;
grid-area: 4 / 3 / 6 / 5;
`
const Item7 = styled.div`
width: 100%;
height: 100%;
grid-area: 4 / 5 / 6 / 7;
`

const Item8 = styled.div`
width: 100%;
height: 100%;
grid-area: 6 / 1 / 8 / 3;
`
const Item9 = styled.div`
width: 100%;
height: 100%;
grid-area: 6 / 3 / 8 / 5;
`
const Item10 = styled.div`
width: 100%;
height: 100%;
grid-area: 6 / 5 / 8 / 7;
`

export default HomeLayout;