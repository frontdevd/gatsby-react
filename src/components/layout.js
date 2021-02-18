import React from 'react'
import PropTypes from 'prop-types'
import '../assets/libraries.css'
import Navbar from './navbar/Navbar'
import { Container, GlobalStyles } from "./globalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
