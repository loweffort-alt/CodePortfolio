import {ReactComponent as Github} from '../images/Github.svg'
import {ReactComponent as Linkedin} from '../images/Linkedin.svg'
import {ReactComponent as Mail} from '../images/Mail.svg'

export const LinksHome = ({logo, link}) => {
  switch (logo) {
    case 'Github':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Github width='50px' height='50px'/>
        </a>
    case 'Linkedin':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Linkedin width='50px' height='50px'/>
        </a>
    case 'Mail':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Mail width='50px' height='50px'/>
        </a>
    default:
      break;
  }
}