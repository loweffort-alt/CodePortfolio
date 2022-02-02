import styled from '@emotion/styled'
import { BodyHome } from './Home-body'
import { FooterHome } from './Home-footer'

const Container = styled.section`
  background-color: var(--blue-bg);
  box-sizing: border-box;
  padding: 0px 67px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 0px 30px;
  }
`

const Ghost = styled.div`
  height: 55px;
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