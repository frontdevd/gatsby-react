import React from 'react'
import Information from '../information/Information'
import Review from '../review/Review'
import { data } from './data'

const Content = () => {
  return (
    <>
      <Information data={data} />
      <Review />
    </>
  )
}

export default Content
