// Possibly add this component differently after building structure
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    // <div className="nav-container">
    //   <Link to="/" className='navLink'>Home </Link>
    //   <Link to="/Space" className='navLink'>Space </Link>
    // </div>
    <div className='footerContainer'>
      <div className='footer'>
        <div className='nav-item'>
          <Link to="/" className="navLink">
            <FontAwesomeIcon icon={icon({name: "fire-flame-curved"})} color="#CFC2B0" />
          </Link>
        </div>
        <div className='nav-item'>
          <Link to="/News" className='navLink'>
            <FontAwesomeIcon icon={icon({name: "newspaper"})} color="#CFC2B0" />
          </Link>
        </div>
        <div className='nav-item'>
          <Link to="/Funny" className='navLink'>
            <FontAwesomeIcon icon={icon({name: 'masks-theater'})} color="#CFC2B0" />
          </Link>
        </div>
        <div className='nav-item'>
          <FontAwesomeIcon icon={icon({name: "magnifying-glass"})} color="#CFC2B0" />
        </div>
      </div>
    </div>
  )
}
