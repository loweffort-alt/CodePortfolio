import {ReactComponent as Github} from '../../images/Icons/Github.svg'
import {ReactComponent as Linkedin} from '../../images/Icons/Linkedin.svg'
import {ReactComponent as Mail} from '../../images/Icons/Mail.svg'
import {ReactComponent as Cv} from '../../images/Icons/CV.svg'

export const LinksHome = ({logo, link, width}) => {
  switch (logo) {
    case 'Github':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Github width={width} height={width}/>
        </a>
    case 'Linkedin':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Linkedin width={width} height={width}/>
        </a>
    case 'Mail':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Mail width={width} height={width}/>
        </a>
    case 'CV':
      return <a href={link} target='_blank' rel='noreferrer'>
          <Cv width={width} height={width}/>
        </a>
    default:
      break;
  }
}