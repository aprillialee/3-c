import styled from "styled-components";

function MenuOption({open}) {
  return (
<MenuList open={open}>
  <li>NEWS</li>
  <li>TUTORIALS</li>
  <li>TOOLS</li>
  <li>INSPIRATION</li>
</MenuList>
  )
}

const MenuList = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li{
border-left: 0.5px solid #AFAFAF;
padding-left: 25px;
padding-right: 25px;
font-size: 14px;
height: 20px;
align-self: center;
font-weight: 600;
}


@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #686c82;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-top: 0px;
    right: 0;
    height: 100%;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 2.5rem;

    li {
      border: none;
      font-size: 15px;
      padding: 20px 10px;
      color: white;
    }
}
`
export default MenuOption;