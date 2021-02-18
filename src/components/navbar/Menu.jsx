import React from 'react'
import { AuthItem, AuthLinks, NavAuth, NavItem, NavLinks, NavMenu } from './NavbarElements'
import Button from '../button/Button'

const Menu = () => {
  return (
    <>
      <NavMenu>
        <NavItem><NavLinks to='/about'>How does it work?</NavLinks></NavItem>
        <NavItem><NavLinks to='/'>Solutions</NavLinks></NavItem>
        <NavItem><NavLinks to='/pricing'>Pricing</NavLinks></NavItem>
        <NavItem><NavLinks to='/audit'>Tools</NavLinks></NavItem>
        <NavItem><NavLinks to='/blog'>Blog</NavLinks></NavItem>
      </NavMenu>
      <NavAuth>
        <AuthItem>
          <AuthLinks to='/registration'>
            <Button
              text='Get Started for Free'
              type='small'
            ></Button>
          </AuthLinks>
        </AuthItem>
        <AuthItem>
          <AuthLinks to='/login'>Login</AuthLinks>
        </AuthItem>
      </NavAuth>
    </>
  )
}

export default Menu
