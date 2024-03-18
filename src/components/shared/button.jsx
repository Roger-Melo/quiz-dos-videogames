import styled, { css } from 'styled-components'

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

const OptionButton = styled(StyledButton)`${({ $state, $index, $userHasAnswered }) => {
  const apply = ({ correct, wrong }) => $userHasAnswered
    ? $state.apiData[$state.currentQuestion]?.correctOption === $index
      ? correct
      : wrong
    : ''

  return css`
    transform: ${$state.clickedOption === $index ? 'translateX(2rem)' : ''};
    background-color: ${apply({ correct: 'var(--color-correct)', wrong: 'var(--color-wrong)' })};
    border: ${apply({ correct: '2px solid var(--color-correct)', wrong: '2px solid var(--color-wrong)' })};
    color: ${apply({ correct: 'var(--color-dark)', wrong: 'var(--color-lightest)' })};
    width: 100%;
    text-align: left;

    &:not([disabled]):hover {
      transform: translateX(1.2rem);
    }
`}}`

export { Button, OptionButton, RestartButton, NextButton }
