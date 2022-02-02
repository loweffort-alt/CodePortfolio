import styled from "@emotion/styled"
import { ReactComponent as Frontend } from '../../images/FrontendImages.svg'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  color: #f7f7f7;
  h1 {
    margin: 0;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.2em;
    font-variant: small-caps;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const FrontendExpertise = () => {
  return <Box>
    <h1>FRONTEND</h1>
    <Frontend/>
  </Box>
}