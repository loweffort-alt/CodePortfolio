import styled from "@emotion/styled"
import { BodyAbout } from "./About-body"

const Container = styled.section`
  padding: 0px 67px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 0px 30px;
  };
  background-color: var(--pink-two);
  position: relative;
`

export const About = () => {
  return <Container>
    <BodyAbout/>
  </Container>
}