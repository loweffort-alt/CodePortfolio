import styled from '@emotion/styled'
import {ReactComponent as Arrow} from '../images/ArrowDown.svg'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 22px;
  cursor: pointer;
`

export const FooterHome = () => {
  return <Footer>
    <Arrow/>
  </Footer>
}