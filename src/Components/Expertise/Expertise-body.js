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
  color: white;
  margin: auto;
  width: 100%;
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0px 5px;
  }
`

export const BodyExpertise = () => {
  return <Container>
    <FrontendExpertise/>
    <BackendExpertise/>
  </Container>
}