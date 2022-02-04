import styled from "@emotion/styled"
import { BodyExpertise } from "./Expertise-body"

const Container = styled.section`
  padding: 0px 67px;
  margin: 0px;
  display: -webkit-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue-bg);
  position: relative;
  height: 100vh;
  @media (max-width: 800px) {
    display: flex;
    padding: 0px 30px;
  };
  @media (min-width: 800px) {
  }
`

export const Expertise = () => {
  return <Container id="expertise">
    <BodyExpertise/>
  </Container>
}