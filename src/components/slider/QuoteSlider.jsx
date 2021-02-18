import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const { Carousel } = require('3d-react-carousal')

const slides = []

const QuoteSlider = () => {
  const [showArrow, setShowArrow] = useState('hide-arrow')
  const data = useStaticQuery(graphql`
    query {
     allFile(filter: {absolutePath: {regex: "/reviews/"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`)

  {data.allFile.edges.map((image, key) => {
    return slides.push(<img src={image.node.publicURL} alt='slide' />)
  })}

  const showArrowHandler = () => setShowArrow('show-arrow')
  const hideArrowHandler = () => setShowArrow('hide-arrow')

  return (
    <div className={showArrow} onMouseOver={showArrowHandler} onMouseLeave={hideArrowHandler}>
      <Carousel slides={slides} autoplay={true} interval={6000} />
    </div>
  )
}

export default QuoteSlider
