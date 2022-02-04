import { Link } from "react-scroll";

export const MenuOptions = ({text, link}) => {
  return <Link style={{cursor: 'pointer'}} to={link} smooth={true} duration={1000} >
    {text}
  </Link>
}