import styled from "@emotion/styled"
import { Form } from "./Form"
import { ReactComponent as ContactImage } from '../../images/ContactImage.svg'

const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const BodyContactMe = () => {
  return <Container>
    <Form />
    <Random>
      <ContactImage />
    </Random>
  </Container>
}