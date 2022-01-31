import styled from "@emotion/styled"
import { ReactComponent as Logo } from '../images/Logo.svg'
import { MenuOptions } from "./MenuOptions"

const Container = styled.div`
  display: flex;  
  list-style: none;
  background: rgb(14,31,38);
  background: linear-gradient(180deg, rgba(14,31,38,1) 68%, rgba(255,255,255,0) 100%);
  justify-content: space-between;
  position: sticky;
  top: 0px;
  padding: 22px 67px 0px;
  height: 70px;
  z-index: 5;
  @media (max-width: 700px) {
    padding: 22px 30px 0px;
  }
`

const Menu = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.25em;
  font-variant: small-caps;
  gap: 50px;
  justify-content: flex-end;
  color: 	#f7f7f7;
  @media (max-width: 700px) {
    display: none;
  }
  width: 100%;
`


export const Header = () => {
  return <>
    <Container>
      <Logo style={{cursor: 'pointer', position:'absolute'}} width='50px'/>
      <Menu>
        <MenuOptions text={'ABOUT'} />
        <MenuOptions text={'EXPERTISE'} />
        <MenuOptions text={'CONTACT'} />
      </Menu>
    </Container>
  </>
}