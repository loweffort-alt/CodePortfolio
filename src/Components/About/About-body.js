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
  color: white;
  margin: auto;
  width: 100%;
`

const Random = styled.div`
  position: absolute;
  left: 0px;
`

export const BodyAbout = () => {
  return <Container>
    <Random>
      <AboutImage/>
    </Random>
    <TextAbout/>
  </Container>
}
