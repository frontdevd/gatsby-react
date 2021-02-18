import styled from 'styled-components'

export const GreenButton = styled.button`
  text-align: center;
  font: 500 16px Poppins,sans-serif;
  color: #fff!important;
  background: #16ac59;
  box-shadow: 0 20px 30px 0 rgba(12,0,46,.1);
  display: inline-block;
  border-radius: 45px;
  border: 0;
  transition: all .2s linear;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
  width: ${({ type }) => (type === 'small' ? '166px' : 'auto')};
  padding: ${({ type }) => (type === 'small' ? '8px 0' : '14px 42px')};
  margin-top: ${({ type }) => (type === 'small' ? '0' : '20px')}; 
  font-size: ${({ type }) => (type === 'small' ? '14px' : '16px')};  

  &:hover {
    transition: all 0.3s ease-out;
    color: #16ac59 !important;
    background: #fff;
  }

  @media screen and (max-width: 960px) {
    width: auto;
    padding: 8px 20px;
  }
`
