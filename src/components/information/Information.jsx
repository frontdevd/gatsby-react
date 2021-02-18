import React from 'react'
import { Image, PageBox, PageWrapper, TipedText, Title } from '../content/ContentElements'
import { Link } from 'gatsby'
import Button from '../button/Button'
import backgroundImg from '../../images/background.png'
import PropTypes from 'prop-types'

const Information = ({ data }) => {
  return (
    <PageWrapper>
      <PageBox>
        <TipedText>Beyond website uptime monitoring</TipedText>
        <Title>{data.title}</Title>
        {data.description.map(el => <p>{el.text}</p>)}
        <Link to='/registration'>
          <Button text={data.button.text} type={data.button.type} />
        </Link>
      </PageBox>
      <PageBox>
        <Image src={backgroundImg} alt='Image' />
      </PageBox>
    </PageWrapper>
  )
}

Information.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Information
