import { Home } from './Components/Home/Home';
import { About } from './Components/About/About'
import { Experience } from './Components/Expertise/Experience';
import { Contact } from './Components/Contact/Contact';
import { Header } from './Components/Header';
import styled from '@emotion/styled';

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
    <Experience />
    <Contact />
  </Container>
}

export default App;
