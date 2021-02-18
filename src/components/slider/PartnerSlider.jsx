import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Slider from 'react-slick'
import { settings } from './settings'

const PartnerSlider = () => {
  const data = useStaticQuery(graphql`
    query {
       allFile(filter: {absolutePath: {regex: "/partners/"}}) {
          edges {
            node {
              publicURL
          }
        }
      }
    }
  `)

  return (
    <Slider {...settings}>
      {data.allFile.edges.map((image, key) => {
        return (
          <div key={key}>
            <img src={image.node.publicURL} alt='Partner' />
          </div>
        )
      })}
    </Slider>
  )
}

export default PartnerSlider
