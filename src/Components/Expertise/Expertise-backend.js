import styled from "@emotion/styled"
import { ReactComponent as Backend } from '../../images/BackendImages.svg'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #f7f7f7;
  h1 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.2em;
    font-variant: small-caps;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  };
  @media (max-width: 800px) {
    h1 {
      margin: 0px;
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 0.25em;
    };
    svg {
      width: 100%;
    }
  };
`

export const BackendExpertise = () => {
  return <Box>
    <h1>BACKEND</h1>
    <Backend/>
  </Box>
}