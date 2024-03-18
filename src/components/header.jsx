import styled from 'styled-components'

const Header = () =>
  <StyledHeader>
    <Img src="logo-quiz-videogames.png" alt="Logo do Quiz dos Videogames" />
    <H1>Quiz dos Videogames</H1>
  </StyledHeader>

const StyledHeader = styled.header`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  margin-right: 1rem;
  width: 14rem;
`

const H1 = styled.h1`
  font-family: 'Wellfleet', serif;
  font-size: 5.6rem;
`

export { Header }
