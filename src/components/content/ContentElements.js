import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`

export const PageBox = styled.div`
  flex-basis: 48%;
`

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  margin-top: 70px;
`
export const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
`

export const TipedText = styled.h1`
  font-size: 30px;
  line-height: 50px;
`
