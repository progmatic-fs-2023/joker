import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div>
      <SearchBar />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">Brand</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/userform" className="nav-link">
                  UserForm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/successfulorder" className="nav-link">
                  SuccessfulOrder
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="cart-icon">
            <NavLink to="/cart" className="nav-link">
              <CgShoppingCart />
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
