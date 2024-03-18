import styled from 'styled-components'

const Button = ({ children, disabled = false, onClick }) =>
  <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>

const StyledButton = styled.button`
  display: block;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s;
  border: 1px solid #d3d3d3;
  width: auto;
  text-align: center;

  &:not([disabled]):hover {
    background-color: #e3e3e3;
  }

  &:is([disabled]):hover {
    cursor: not-allowed;
  }
`

const RestartButton = styled(StyledButton)`
  float: right;
`

const NextButton = styled(StyledButton)`
  float: right;
`

const OptionButton = styled(StyledButton)`
  transform: ${props => props.$state.clickedOption === props.$index ? 'translateX(2rem)' : ''};
  background-color: ${props => props.$userHasAnswered
    ? props.$state.apiData[props.$state.currentQuestion]?.correctOption === props.$index
      ? 'var(--color-correct)'
      : 'var(--color-wrong)'
    : ''};
  border: ${props => props.$userHasAnswered
    ? props.$state.apiData[props.$state.currentQuestion]?.correctOption === props.$index
      ? '2px solid var(--color-correct)'
      : '2px solid var(--color-wrong)'
    : ''};
  color: ${props => props.$userHasAnswered
    ? props.$state.apiData[props.$state.currentQuestion]?.correctOption === props.$index
      ? 'var(--color-dark)'
      : 'var(--color-lightest)'
    : ''};

  width: 100%;
  text-align: left;

  &:not([disabled]):hover {
    transform: translateX(1.2rem);
  }
`

export { Button, OptionButton, RestartButton, NextButton }
