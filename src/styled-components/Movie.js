import { styled } from '@vue-styled-components/core'

export const StyledMovie = styled.section`
  max-width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.2rem;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
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
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
export const StyledMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 600px) {
    gap: 3rem;
  }
`
export const StyledTitle = styled.h1`
  color: #e4e6ea;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`
export const StyledURL = styled(StyledBackLink)`
  padding: 5px 0;
  &:hover {
    outline: none;
    border: none;
    color: rgb(120, 160, 120);
  }
  @media (max-width: 600px) {
    text-decoration: underline;
    font-size: 18px;
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
  @media (max-width: 600px) {
    top: 6%;
    width: 300px;
  }
`
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
  gap: 3rem;
  width: 90%;
  @media (max-width: 600px) {
    ${'' /* flex-wrap: wrap; */}
    flex-direction: column;
    align-items: center;
  }
`
export const StyledListItem = styled.li`
  color: #e4e6ea;
  @media (max-width: 600px) {
    display: flex;
  }
`
