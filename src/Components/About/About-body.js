import styled from "@emotion/styled"
import '../../colors.css'
import { ReactComponent as AboutImage } from "../../images/AboutImage.svg"
import { TextAbout } from "./About-text"

const Container = styled.section`
  background-color: var(--blue-bg);
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    height: 70vh;
  }
  color: white;
  margin: auto;
  width: 100%;
`

const Random = styled.div`
  position: absolute;
  right: 0px;
  z-index: 2;
`

export const BodyAbout = () => {
  return <Container>
    <Random>
      <AboutImage/>
    </Random>
    <TextAbout/>
  </Container>
}