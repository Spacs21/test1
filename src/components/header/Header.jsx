import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import { GoSearch } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    let NAVBAR_DATA = ["Home", "Brands", "Recent Products", "Contacts", "About"]
    const data = NAVBAR_DATA.map((item, inx) => <li key={inx}><a href="#" key={inx}>{item}</a></li>)

  return (
    <header className='header'>
        <div className="container">
            <nav className='navbar'>
                <div className="logo">
                    <img src={logo}/>
                    <h2>Mohid</h2>
                </div>
                <ul className="collection">
                    {data}
                </ul>
                <div className="burger-menu">
                    <RxHamburgerMenu/>
                </div>
                <div className="pngs">
                    <GoSearch />
                    <FaUser />
                    <FaCartShopping />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header