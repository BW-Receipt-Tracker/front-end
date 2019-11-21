import React from 'react'
import { NavLink } from 'react-router-dom'
import RTLogo from '../RTLogo.png';


  
const NavBar = () => {
    const logOut = e => {
        localStorage.setItem('token', null);
    }

    return (
        <nav className="nav">
            <NavLink className="login" to='/login'>Log In</NavLink>
            <NavLink className="register" to='/register'>Register</NavLink>
            <NavLink className="receipts" to='/receipts-list'>Saved Receipts</NavLink>
            <NavLink className="create" to='/create-receipt'>Create New Receipt</NavLink>
            <NavLink className="logout" to='/login' onClick={logOut}>Log Out</NavLink>
            <img className="logo" src={RTLogo} alt="Receipt Tracker logo"></img>
        </nav>
    )
}

export default NavBar