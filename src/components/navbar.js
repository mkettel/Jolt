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
            <FontAwesomeIcon icon={icon({name: "fire-flame-curved"})} color="#3d405b" className='navIcon' />
          </Link>
        </div>
        <div className='nav-item'>
          <Link to="/News" className='navLink'>
            <FontAwesomeIcon icon={icon({name: "newspaper"})} color="#3d405b" className='navIcon' />
          </Link>
        </div>
        <div className='nav-item'>
          <Link to="/Funny" className='navLink'>
            <FontAwesomeIcon icon={icon({name: 'masks-theater'})} color="#3d405b" className='navIcon' />
          </Link>
        </div>
        <div className='nav-item'>
          <Link to="/Science">
            <FontAwesomeIcon icon={icon({name: "frog"})} color="#3d405b" className='navIcon' />
          </Link>
        </div>
      </div>
    </div>
  )
}
// Link Color: #CFC2B0 *first color*
// Link Color: #E63946 *second color* red
