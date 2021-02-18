import React, { useState } from "react"
import Logo from "../../images/icons/logo.svg"
import burgerImg from "../../images/icons/menu.svg"
import Cancel from "../../images/icons/cancel.svg"
import { Container } from "../globalStyles"
import { MobileIcon, Nav, NavLogo, Header, NavWrapper } from "./NavbarElements"
import Menu from "./Menu"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <Header>
      <Container>
        <Nav click={click}>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <img src={Logo} alt="Logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <img src={Cancel} alt="cancel" /> : <img src={burgerImg} alt="menu" />}
          </MobileIcon>
          <NavWrapper onClick={handleClick} click={click}>
            <Menu />
          </NavWrapper>
        </Nav>
      </Container>
    </Header>
  )
}

export default Navbar
