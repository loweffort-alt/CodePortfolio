import styled from "@emotion/styled"
import { ReactComponent as Logo } from '../images/Logo.svg'
import { MenuOptions } from "./MenuOptions"
import { Link } from "react-scroll";

const Container = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(14,31,38,1) 70%, rgba(255,255,255,0) 100%);
  justify-content: space-between;
  position: fixed;
  top: 0px;
  padding: 22px 67px 0px;
  height: 92px;
  z-index: 5;
  @media (max-width: 700px) {
    padding: 10px 30px 0px;
    height: 82px;
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
      <Link to="home" smooth={true} duration={1000} >
        <Logo style={{cursor: 'pointer', position:'absolute'}} width='50px'/>
      </Link>
      <Menu>
        <MenuOptions text={'ABOUT'} link={'about'} />
        <MenuOptions text={'EXPERTISE'} link={'expertise'} />
        <MenuOptions text={'CONTACT'} link={'contact'} />
      </Menu>
    </Container>
  </>
}