import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/savedreceipts'>Saved Receipts</NavLink>
            <NavLink to='/login'>Log Out</NavLink>
        </nav>
    )
}

export default NavBar