import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className='nav-bar bg-gray-600 text-lime-200 text-xl p-3'>
                <span className="nav-link p-2">
                    <NavLink to="/">Home</NavLink>
                </span>
                <span className="nav-link p-2">
                    <NavLink to="/userform">UserForm</NavLink>
                </span>
                <span className="nav-link p-2">
                    <NavLink to="/successfulorder">SuccessfulOrder</NavLink>
                </span>
            </nav>
        </div>
    )
}

export default NavBar
