import styled from '@emotion/styled'
import { BodyHome } from './Home-body'
import { FooterHome } from './Home-footer'

const Container = styled.div`
  padding: 0px 67px;
  margin: 0px;
  margin-top: -92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 0px 30px
  }
`

const Ghost = styled.div`
`

export const Home = () => {
  return <>
    <Container>
      <Ghost/>
      <BodyHome/>
      <FooterHome/>
    </Container>
  </>
}