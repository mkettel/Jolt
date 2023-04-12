// Possibly add this component differently after building structure
import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

export const Header = () => {

  // Make page name dynamically changed


  return (
    <div className='parent'>
      <div className='header'>
        <div className='titleContent'>
          <h1 className='mainTitle'>Jolt</h1>
          <FontAwesomeIcon icon={icon({name: 'rocket'})} color="#092753" className='mainIcon'/>
        </div>
      </div>
    </div>

  )
}
