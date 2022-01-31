import { Home } from './Components/Home';
import { About } from './Components/About'
import { Experience } from './Components/Experience';
import { Contact } from './Components/Contact';
import { Header } from './Components/Header';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
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
