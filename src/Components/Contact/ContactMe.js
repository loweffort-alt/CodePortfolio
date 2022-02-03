import styled from "@emotion/styled"
import { BodyContactMe } from "./ContactMe-body"

const Container = styled.section`
  background-color: var(--blue-bg);
  box-sizing: border-box;
  padding: 0px 67px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media (max-width: 800px) {
    padding: 50px 30px 0px;
  }
`

export const ContactMe = () => {
  return <Container>
    <BodyContactMe/>
  </Container>
}