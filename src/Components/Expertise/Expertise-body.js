import styled from "@emotion/styled"
import { BackendExpertise } from "./Expertise-backend"
import { FrontendExpertise } from "./Expertise-frontend"

const Container = styled.section`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    height: 70vh;
  }
  color: white;
  margin: auto;
  width: 100%;
`

export const BodyExpertise = () => {
  return <Container>
    <FrontendExpertise/>
    <BackendExpertise/>
  </Container>
}