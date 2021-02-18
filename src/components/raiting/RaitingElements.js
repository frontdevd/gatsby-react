import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 50%;
`
export const RaitingWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 0;
  flex-basis: 50%;

  @media screen and (max-width: 767px) {
    flex-basis: 98%;
    margin-bottom: 2px;
  }
`

export const RaitingBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`

export const RaitingCount = styled.span`
  font-weight: 700;
  color: #323537;
`

export const RaitingImg = styled.img`
  height: 20px;
  width: 84px;
`

export const StarImg = styled.img`
  width: 20px;
`
