import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const navbar = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><Link to='/about'>About Link</Link></li>
      </ul>
    </nav>
  )
};

export default navbar;