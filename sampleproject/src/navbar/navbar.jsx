// import React from 'react'
import "./navbar.css"
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
  return (
    // <div className="navbar">navbar</div>
    <div class="navBar">
        <div class="navBar-Con">
            <a class="navbar-items"></a>
                {/* <!-- <i class="fa fa-bars"></i></a> --> */}
            <a href="#" class="navBar-Home">HOME</a>
            <a href="#Products" class="navBar-Products">Products</a>
            <a href="#Howitworks" class="navBar-Howitworks">How it works</a>
            <a href="#Blogs" class="navBar-Blogs">Blogs</a>
            {/* <a href="#Icon" class="navBar-Icon"><FontAwesomeIcon icon="fa-duotone fa-bag-shopping" /></a> */}
        </div>
        {/* <FontAwesomeIcon icon="fa-duotone fa-bag-shopping" /> */}
    </div>
  )
}
