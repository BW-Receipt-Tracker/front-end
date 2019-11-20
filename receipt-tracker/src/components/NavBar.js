import React from 'react'
import { NavLink } from 'react-router-dom'
// import styled from "styled-components"

const NavBar = () => {
    return (
        <nav >
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/receipts-list'>Saved Receipts</NavLink>
            <NavLink to='/create-receipt'>Create New Receipt</NavLink>
            <NavLink to='/login'>Log Out</NavLink>
        </nav>
    )
}

export default NavBar