import { NavLink } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container container-fluid">
        <a href="index.html" className="logo navbar-brand">
          <h1>Villa</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
          <ul className="nav">
            <li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>Home</NavLink></li>
            <li><NavLink to="/properties" className={({isActive}) => isActive ? "active" : "" }>Properties</NavLink></li>
            <li><NavLink to="/property-details" className={({isActive}) => isActive ? "active" : "" }>Property Details</NavLink></li>
            <li><NavLink to="/contact-us" className={({isActive}) => isActive ? "active" : "" }>Contact Us</NavLink></li>
            <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
          </ul>   
        </div>
      </div>
    </nav>
  )
}

export default Navbar



