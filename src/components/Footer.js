import React from 'react'
import { IoLocationOutline } from "react-icons/io5"
import { FiPhoneCall } from "react-icons/fi"
import { GoMail } from "react-icons/go"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="container-fluid bg-light mt-5">
        <div className="row">
            <div className="col-md-3 my-5">
                <img className='logo' src={("./../../freelance_logo-removebg-preview (1).png")} alt="" />
                <p className="text-start">
                    Freelance Hub is a platform that connects freelancers with clients.
                </p>
                <Link to={"/faq"}> FAQ </Link>
            </div>

            <div className="col-md-3 my-5">
                <h5 className="text-start">For Clients</h5>
                <ul className="list-unstyled text-start">
                    <li><a href="#">Find Freelancers</a></li>
                    <li><a href="#">Post Project</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="col-md-3 my-5">
                <h5 className="text-start">For Freelancers</h5>
                <ul className="list-unstyled text-start">
                    <li><a href="#">Find Work</a></li>
                    <li><a href="#">Create Account</a></li>
                </ul>
            </div>

            <div className="col-md-3 my-5">
                <h5 className='text-start'> Call Us</h5>
                <div className='d-flex m-auto gap-3'>
                    <IoLocationOutline className='mt-1'/>
                    <p>Nigeria</p>
                </div>

                <div className='d-flex m-auto gap-3'>
                    <FiPhoneCall className='mt-1'/>
                    <p>+2347015796524</p>
                </div>

                <div className='d-flex m-auto gap-3'>
                    <GoMail className='mt-1'/>
                    <p>kevinnduka4@gmail.com</p>
                </div>
            </div>
            <p className='text-center text-bg-tertiary footer'>
                &copy; 2024 Freelance Hub. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer