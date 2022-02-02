import styled from "@emotion/styled"
import { LinksHome } from "./Home-links"

const Font = styled.div`
  font-family: Raleway;
  color: #f7f7f7;
  line-height: 56px;
  text-shadow: 0.2em 0.2em black;
  h1 {
    font-size: 80px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.1em;
    text-transform: capitalize;
  };
  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.03em;
    text-transform: capitalize;
  };
  position: absolute;
  left: 0px;
  z-index: 3;
  @media (max-width: 450px) {
    line-height: 75px;
    text-align: center;
  }
`

const Links = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  @media (max-width: 450px) {
    justify-content: center;
  }
`

export const TextHome = () => {
  return <Font>
    <h1>Hello,</h1>
    <h1>I'm Alex!</h1>
    <h2>A Front-End Developer</h2>
    <Links>
      <LinksHome logo={'Github'} link={'https://github.com/loweffort-alt'} />
      <LinksHome logo={'Linkedin'} link={'https://www.linkedin.com/in/alexfarfan/'} />
      <LinksHome logo={'CV'} link={'https://getonbrd-prod.s3.amazonaws.com/uploads/cv/adff95df2676ecf984666ba076e0af02/ResumeAlexFarfan.pdf?X-Amz-Expires=86400&X-Amz-Date=20220201T204116Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJT5MYUSOEN4SITVA%2F20220201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=e8339aeebf7fcd7805409b29b1945a6d10c6dcd5788d61401942d3749284fcf9'} />
      <LinksHome logo={'Mail'} link={'mailto:farfan_alexander@outlook.com'} />
    </Links>
  </Font>
}