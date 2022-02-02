import { Home } from './Components/Home/Home';
import { About } from './Components/About/About'
import { Header } from './Components/Header';
import styled from '@emotion/styled';
import { Expertise } from './Components/Expertise/Expertise';
import { ContactMe } from './Components/Contact/ContactMe';

const Container = styled.div`
  position: relative;
  box-sizing: content-box;
  overflow-x: hidden;
`

function App() {
  return <Container>
    <Header/>
    <Home />
    <About />
    <Expertise />
    <ContactMe />
  </Container>
}

export default App;
