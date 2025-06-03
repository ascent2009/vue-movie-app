import { styled } from '@vue-styled-components/core'

export const StyledMovie = styled.section`
  max-width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.2rem;
  position: relative;
`
export const StyledBackLink = styled.a`
  width: fit-content;
  padding: 5px 15px;
  color: #e4e6ea;
  font-size: 1.5rem;
`

export const StyledMovieContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`
export const StyledMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`
export const StyledTitle = styled.h1`
  color: #e4e6ea;
`
export const StyledURL = styled(StyledBackLink)`
  padding: 5px 0;
  &:hover {
    outline: none;
    border: none;
    color: rgb(120, 160, 120);
  }
`
export const StyledSlogan = styled.h1`
  position: absolute;
  width: 500px;
  text-align: center;
  color: red;
  top: 15%;
  ${'' /* left: 2%; */}
  font-weight: bold;
`
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
  gap: 3rem;
`
export const StyledListItem = styled.li`
  color: #e4e6ea;
`
