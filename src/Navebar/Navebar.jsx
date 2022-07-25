import React from 'react'
import { Link } from 'react-router-dom'


export default function Navebar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bolder" to="Home">NOXE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                props.userData ? <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Movies">Movies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  className="nav-link" to="TV">T V</Link>
                                    </li><li className="nav-item">
                                        <Link  className="nav-link" to="Person">Person</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="About">About</Link>
                                    </li>
                                </>:""
                            }

                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item me-3 d-flex align-items-center">
                                <i className='fab mx-2 fa-instagram'></i>
                                <i className='fab mx-2 fa-facebook'></i>
                                <i className='fab mx-2 fa-youtube'></i>
                                <i className='fab mx-2 fa-twitter'></i>
                            </li>
                            {
                                props.userData?<>
                                <li className="nav-item">
                                <span onClick={props.logOut} className="nav-link " >LogOut</span>
                            </li>
                                </>:<>
                                <li className="nav-item">
                                <Link className="nav-link" to="Register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Login">Login</Link>
                            </li>
                                </>
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
