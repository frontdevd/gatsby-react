import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    font: 400 16px/26px Poppins, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
    color: #323537;
    z-index: 0;
  }

  main {
    margin-top: 120px;
  }

  img {
    max-width: 100%;
    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  div, p, a {
    outline: none;
  }
`

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: unset;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
   flex-direction: column;
  }
`

export const Title = styled.h1`
  color: #323537;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
`

export const Row = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 60px 0;

  @media screen and (max-width: 991px) {
    margin: 30px 0;
  }
`