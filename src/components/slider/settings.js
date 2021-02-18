import React from 'react'
import { LeftArrow, RightArrow } from './SliderElements'
import left from '../../images/icons/left.png'
import right from '../../images/icons/right.png'

const NextArrow = ({ onClick }) => <LeftArrow onClick={onClick}><img src={left} alt='arrow' /></LeftArrow>
const PrevArrow = ({ onClick }) => <RightArrow onClick={onClick}><img src={right} alt='arrow' /></RightArrow>

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
