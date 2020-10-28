import styled from "styled-components";

import MenuOption from "./MenuOptions"
import Burger from "./Burger";

function NavBar() {
  return(
    <NavBarStyled>
      <Logo img src="./3c.png"/>
      <Gap/>
      <Search placeholder="SEARCH..."/>
      <Burger/>
    </NavBarStyled>

  )
}

const NavBarStyled = styled.div`
width: 100vw;
height: 60px;
background: #FFFFFF;
box-shadow: 0.5px 0.5px 2.5px;
display: flex;
flex-direction: row;
margin: auto;

`

const Gap = styled.div`
width: 50px;
height: 100%;
@media (max-width: 768px){
  display: none;
}
`
const Logo = styled.img`
height: 40px;
width: 40px;
margin: 10px;
margin-left: 80px;

@media (max-width: 768px) {
  margin: 10px;
  padding: 0;
}
`

const Search = styled.input`
margin-left: 35px;
width: 40%;
height: 60%;
margin-top: 12px;
border: 1px solid #686c82;
border-radius: 6px;
padding: 10px;
@media (max-width: 768px) {
  width: 60%;
  margin-left: 5px;
}

@media (min-width: 1024px) {
margin-left: 10px;
width: 30%;
}
`

export default NavBar;