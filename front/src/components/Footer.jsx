import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-light py-4 mt-5">
            <div className="container text-center">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink>
                    </li>

                    <li className="nav-item"> <NavLink to='/products' className="nav-link px-2 text-muted">products</NavLink></li>
                    <li className="nav-item"> <NavLink to='/about' className="nav-link px-2 text-muted">About</NavLink></li>
                    
                    <li className="nav-item"> <NavLink to="/contact" className="nav-link px-2 text-muted">Contect</NavLink></li>
                    {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li> */}
                </ul>


                <div className="d-flex gap-3 justify-content-center mt-4">
                    <p href="#" class="text-dark no-decoration "><i class="fab fa-twitter fa-2x"></i></p>
                    <a href="#" class="text-dark"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="#" class="text-dark"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="#" class="text-dark"><i class="fas fa-phone-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
