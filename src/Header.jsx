import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div >
    <ul>
  <li>
  <Link to='/'>Home</Link></li>
  {/* <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li> */}
  <li style={{float:'right'}}><Link className="active" to='/contact'>Contact</Link></li>
</ul>
  </div>
  
  )
}

export default Header