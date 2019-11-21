import React from 'react'
import { NavLink } from 'react-router-dom'
import RTLogo from '../RTLogo.png';


  
const NavBar = () => {
    return (
        <nav class="nav">
            <img class="logo" src={RTLogo} alt="Receipt Tracker logo"></img>/>
            <NavLink class="login" to='/login'>Log In</NavLink>
            <NavLink class="register" to='/register'>Register</NavLink>
            <NavLink class ="receipts" to='/receipts-list'>Saved Receipts</NavLink>
            <NavLink class ="create" to='/create-receipt'>Create New Receipt</NavLink>
            <NavLink class="logout" to='/login'>Log Out</NavLink>
        </nav>
    )
}

export default NavBar