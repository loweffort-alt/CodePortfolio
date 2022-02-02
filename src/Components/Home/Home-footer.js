import styled from '@emotion/styled'
import {ReactComponent as Arrow} from '../../images/Icons/ArrowDown.svg'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 22px;
`

export const FooterHome = () => {
  return <Footer>
    <Arrow/>
  </Footer>
}