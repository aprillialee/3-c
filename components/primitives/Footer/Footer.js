import styled from "styled-components";

function Footer() {
  return(
    <FooterStyled>Hello</FooterStyled>
  )
};

const FooterStyled = styled.div`
clear: both;
background: #EEF6FA;
box-shadow: 0.5px 0.5px 2.5px;
height: 100px;
width: 100%;
margin-top: 20%;

@media (max-width: 768px){
  margin-top: 30%;
}
`

export default Footer;