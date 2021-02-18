import React from 'react'
import { GreenButton } from './ButtonElements'
import PropTypes from 'prop-types'

const Button = ({type, text}) => {
  return (
    <>
      <GreenButton type={type}>{text}</GreenButton>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
