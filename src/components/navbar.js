// Possibly add this component differently after building structure


import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className='navLink'>Home </Link>
      <Link to="/Space" className='navLink'>Space </Link>
    </div>
  )
}
