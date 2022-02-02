import styled from "@emotion/styled"
import { BackendExpertise } from "./Expertise-backend"
import { FrontendExpertise } from "./Expertise-frontend"

const Container = styled.section`
  height: 70vh;
  box-sizing: border-box;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    height: 70vh;
    padding: 0px 5px;
  }
  color: white;
  margin: auto;
  width: 100%;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`

export const BodyExpertise = () => {
  return <Container>
    <FrontendExpertise/>
    <BackendExpertise/>
  </Container>
}