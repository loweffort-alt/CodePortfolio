import styled from "@emotion/styled"
import { BackendExpertise } from "./Expertise-backend"
import { FrontendExpertise } from "./Expertise-frontend"

const Container = styled.section`
  box-sizing: border-box;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 0px;
    gap: 30px;
  }
`

export const BodyExpertise = () => {
  return <Container>
    <FrontendExpertise/>
    <BackendExpertise/>
  </Container>
}