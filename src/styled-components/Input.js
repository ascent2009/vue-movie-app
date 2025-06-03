import { styled } from '@vue-styled-components/core'

export const StyledInputBlock = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  border-bottom: 1px solid white;
  border-radius: 8px;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
`

export const StyledInput = styled.input`
  border: none;
  outline: none;

  background: transparent;
  color: white;
  font-size: 1em;
`
