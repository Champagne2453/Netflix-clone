import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {
  const[isScrolledd, setIsScrolled]= useState(false);
  window.onscroll =() =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return() => (window.onscroll = null);
  }

  return (
    <div className={isScrolledd ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>

            </div>
            <div className="right">
                <Search className='icons'/>
                <span>KIDS</span>
                <Notifications className='icons'/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />

                <div className='profile'>
                <ArrowDropDown className='icons'/>
                <div className='options'>
                  <span className="set">Settings</span>
                  <span className="log">Logout</span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar