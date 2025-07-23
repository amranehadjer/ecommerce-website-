import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Nav() {
  const { cart ,setcart} = useContext(CartContext);

  const viewcart = () => {
    setcart([])
     
    
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm bg-white">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to='/'>
            COLLECTION
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-out me-1"></i>
                Login
              </NavLink>

              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({cart.length})
              </NavLink>
              
{/* { <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({cart.length})
              </NavLink> ?
        (viewcart):(cart)
      } */}
       



            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

