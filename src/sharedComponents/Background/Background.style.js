import styled from 'styled-components'

const Container = styled.div`
  border: solid green;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #010101;
`
const LogoContainer = styled.div`
  background-color: #2d87b5;
  height: 27%; 
  width 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius:20px;
  position: relative;
`

const Logo = styled.h2`
  font-size: 2.2em;
  color: #fff;
  text-align: center;
  margin-top: 35px;
`

export { Container, LogoContainer, Logo }
