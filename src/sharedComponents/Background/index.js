import React from 'react'

import { Container, LogoContainer, Logo } from './Background.style'

const Background = props => (
  <Container>
    <LogoContainer>
      <Logo>XTeam</Logo>
    </LogoContainer>
    {props.children}
  </Container>
)

export { Background }
