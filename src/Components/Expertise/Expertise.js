import styled from "@emotion/styled"
import { BodyExpertise } from "./Expertise-body"

const Container = styled.section`
  padding: 0px 67px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  @media (max-width: 700px) {
    padding: 0px 30px;
  };
  background-color: var(--blue-bg);
  position: relative;
  @media (max-width: 450px) {
    height: 120vh;
  };
`

export const Expertise = () => {
  return <Container>
    <BodyExpertise/>
  </Container>
}