import React from 'react'
import { RaitingBox, RaitingCount, RaitingImg, RaitingWrapper, StarImg } from './RaitingElements'
import star from '../../images/icons/star.svg'
import PropTypes from 'prop-types'

const RaitingItem = ({publicURL, counter}) => {
  debugger
  return (
    <RaitingWrapper>
      <RaitingBox>
        <RaitingImg src={publicURL} alt='Raiting' />
        <RaitingCount>{counter}</RaitingCount>
      </RaitingBox>
      <RaitingBox>
        {Array(5).fill(star).map((el, index) => <StarImg
          key={index} src={el} alt='star' />)}
      </RaitingBox>
    </RaitingWrapper>
  )
}

RaitingItem.propTypes = {
  publicURL: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired
}

export default RaitingItem
