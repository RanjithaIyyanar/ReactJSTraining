import React from 'react'
import "./navbar.css"

export default function NavBar() {
  return (
    // <div classNameName="navbar">navbar</div>
   <div> 
    <div className="navBar">
      <div className='Logo'>
      <i class="fa-solid fa-feather"></i>
          <p>The Techie Blog</p>
      </div>
      <div className="navBar-Con">
          <a href="#" className="navBar-Home">HOME</a>
          <a href="#Products" className="navBar-Products">Products</a>
          <a href="#Howitworks" className="navBar-Howitworks">How it works</a>
          <a href="#Blogs" className="navBar-Blogs">Blogs</a>
          <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
    </div>
  )
}
