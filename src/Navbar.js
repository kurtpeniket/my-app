import React from 'react';
import './Navbar.css';

const navbar = (props) => {
  return (
    <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
    <a className="navbar-brand" href="#">
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Messages</a>
        </li>
        <li className="nav-item dropdown">
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  )
};

export default navbar;