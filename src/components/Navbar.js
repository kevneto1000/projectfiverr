import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light w-75 rounded-3 mt-5 m-auto"
    >
        <div className="container">
            <a className="navbar-brand" href="#"><img className='logo' src={("./../../freelance_logo-removebg-preview (1).png")} alt="" /></a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav m-auto mt-2 mt-lg-0 ">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></a
                        >
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find Freelancers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Up</a>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <Link to={"/post"} 
                        className="btn btn-outline-info rounded-3 px-3 my-2 my-sm-0" 
                        type="submit" 
                    > 
                        Post a project 
                    </Link>
                </form>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar