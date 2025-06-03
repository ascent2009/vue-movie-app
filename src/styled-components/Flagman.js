import { styled } from '@vue-styled-components/core'

export const StyledFlagman = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  backdrop-filter: blur(10px);
`
export const StyledRatingBlock = styled.div`
  position: absolute;
  left: 20px;
  width: 90%;
  top: 20px;
  display: flex;
  gap: 10px;
  color: #e4e6ea;
  align-items: center;
  justify-content: space-around;
`
export const StyledSubRatingBlock = styled.div`
  width: 70%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

export const StyledTitle = styled.h1`
  font-weight: bold;
`
