import styled from "@emotion/styled"
import {ReactComponent as Image} from '../../images/FrontImage.svg'
import { TextHome } from "./Home-text"

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-between;
  background: rgba(14,31,38,0.3);
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    height: 70vh;
    background: rgba(14,31,38,0.3);
  };
`

const Random = styled.div`
  position: absolute;
  right: 0px;
  z-index: 2;
`

export const BodyHome = () => {
  return <Container>
    <TextHome />
    <Random>
      <Image />
    </Random>
  </Container>
}