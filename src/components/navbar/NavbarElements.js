import { Link } from 'gatsby'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  transition: all .2s linear;
  box-shadow: none;
  
  &.active {
    box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 111px;
  align-items: center;
`
export const NavAuth = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  width: 210px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: block;
    cursor: pointer;
    width: 24px;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  flex-basis: 76%;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? '100%' : '-1000px')};
    left: 0;
    background: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  flex-basis: 76%;


  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`

export const NavItem = styled.li`
  margin-right: 30px;

  @media screen and (max-width: 1300px) {
    margin-right: 0;
    width: 100%;
    left: 0;
  }
`
export const AuthItem = styled.li`
  margin-right: 0;

  @media screen and (max-width: 1300px) {
    margin-right: 0;
    width: 100%;
    left: 0;
  }
`
export const AuthLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-family: Poppins, sans-serif;
  color: #323537;
  transition: color .2s linear;
  font-size: 15px;
  position: relative;

  &:hover {
    color: #16ac59;
  }

  @media screen and (max-width: 1300px) {
    padding: 10px 24px;
  }
`

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-family: Poppins, sans-serif;
  color: #323537;
  transition: color .2s linear;
  font-size: 15px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    transition: width .3s;
    position: absolute;
    background-color: #16ac59;
    bottom: 0;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #16ac59;
  }

  @media screen and (max-width: 1300px) {
    padding: 10px 24px;
  }
`
