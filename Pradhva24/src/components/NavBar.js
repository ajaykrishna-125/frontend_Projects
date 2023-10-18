import React from 'react'
import { Link } from "react-router-dom";
import image from "./logo.jpg"



const NavBar = () => {
    return (
        <div>
            <nav style={{color:'black', backgroundColor:'black' }} className="navbar fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={image} alt="HTA" width="50px" height="50px"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/enroll">Enroll Now</Link></li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
