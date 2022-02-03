import styled from "@emotion/styled"
import { BodyExpertise } from "./Expertise-body"

const Container = styled.section`
  padding: 0px 67px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue-bg);
  position: relative;
  @media (max-width: 800px) {
    padding: 0px 30px;
  };
  @media (min-width: 800px) {
    height: 70vh;
    justify-content: space-between;
  }
`

export const Expertise = () => {
  return <Container>
    <BodyExpertise/>
  </Container>
}