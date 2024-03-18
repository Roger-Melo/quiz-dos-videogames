import styled from 'styled-components'

const Button = styled.button`
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

export { Button }
