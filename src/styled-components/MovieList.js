import { styled } from '@vue-styled-components/core'

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const StyledText = styled.p`
  display: none;
  place-items: center;
  position: absolute;
  text-align: center;
  color: white;
  width: 25rem;
  height: 100%;
  left: -15%;
  font-size: 1.5rem;
  opacity: 1;
  transition: 1s;
`
export const StyledListItem = styled.li`
  position: relative;
  width: 90%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${StyledText} {
    display: flex;
  }
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 600px) {
    &:active ${StyledText} {
      display: flex;
    }
  }
`
export const StyledRatingBlockItem = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e4e6ea;
  font-weight: bold;
`
