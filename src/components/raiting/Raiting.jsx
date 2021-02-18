import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Wrapper } from './RaitingElements'
import RaitingItem from './RaitingItem'

const Raiting = () => {
  const data = useStaticQuery(graphql`
    query {
     allFile(filter: {absolutePath: {regex: "/raiting/"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`)

  return (
    <Wrapper>
      {data.allFile.edges.map((image, key) => <RaitingItem
        publicURL={image.node.publicURL}
        counter='48/7'
        key={key} />)}
    </Wrapper>
  )
}

export default Raiting
