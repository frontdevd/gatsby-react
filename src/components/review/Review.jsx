import React from 'react'
import SimpleSlider from '../slider/PartnerSlider'
import Raiting from '../raiting/Raiting'
import { Row, Title, Wrapper } from '../globalStyles'
import QuoteSlider from '../slider/QuoteSlider'

const Review = () => {
  return (
    <>
      <Title>Trusted by 15,000+ businesses & compatible with over 100+ platforms</Title>
      <Row>
        <SimpleSlider />
      </Row>
      <Wrapper>
        <Raiting />
        <QuoteSlider />
      </Wrapper>
    </>
  )
}

export default Review
