import {ReactComponent as Github} from '../../images/Icons/Github.svg'
import {ReactComponent as Linkedin} from '../../images/Icons/Linkedin.svg'
import {ReactComponent as Mail} from '../../images/Icons/Mail.svg'
import {ReactComponent as Cv} from '../../images/Icons/CV.svg'

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
    case 'CV':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Cv width='50px' height='50px'/>
        </a>
    default:
      break;
  }
}