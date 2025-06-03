import { styled } from '@vue-styled-components/core'

export const StyledHeader = styled.header`
  font-size: 1.5em;
  ${'' /* text-align: center; */}
  color: red;
  margin: 2rem auto 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 600px) {
    position: relative;
    flex-direction: column;
    gap: 2rem;
  }
`
export const StyledModeButton = styled.button`
  background-color: transparent;
  @media (max-width: 600px) {
    position: absolute;
    top: -30%;
    right: 0%;
  }
`
