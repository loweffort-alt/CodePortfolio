import styled from "@emotion/styled"
import { LinksHome } from "./Home-links"

const Font = styled.section`
  font-family: Raleway;
  color: #f7f7f7;
  line-height: 56px;
  text-shadow: 0.2em 0.2em black;
  position: absolute;
  left: 0px;
  z-index: 3;
  div {
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
  h1 {
    font-size: 80px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    margin: 0px;
  };
  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.03em;
    text-transform: capitalize;
  };
  @media (max-width: 550px) {
    text-align: center;
    height: 100%;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 65px;
    };
  };
`

const Links = styled.section`
  display: flex;
  gap: 34px;
  align-items: center;
  a {
    display: flex;
    padding: 5px;
  };
  @media (max-width: 700px) {
    justify-content: center;
    svg {
      width: 45px;
      height: 45px;
    };
  }
`

export const TextHome = () => {
  return <Font>
    <div>
      <h1>Hello,</h1>
      <h1>I'm Alex!</h1>
    </div>
    <h2>A Front-End Developer</h2>
    <Links>
      <LinksHome logo={'Github'} link={'https://github.com/loweffort-alt'} width={'50px'}/>
      <LinksHome logo={'Linkedin'} link={'https://www.linkedin.com/in/alexfarfan/'} width={'50px'} />
      <LinksHome logo={'CV'} link={'https://drive.google.com/file/d/1kK3vCQRWGQ342cQmwEI6FkzNDPOBCrBY/view?usp=sharing'} width={'50px'} />
      <LinksHome logo={'Mail'} link={'mailto:farfan_alexander@outlook.com'} width={'50px'} />
    </Links>
  </Font>
}