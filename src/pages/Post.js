import React from 'react'
import Navbar from "./../components/Navbar";

function Post() {
  return (
    <div className="container">

      <Navbar />

      <div className="row">

        <div className="col-md-2 mt-4">
          <div className="card profile-card">
            <img src={("./../../1283.png_860.png")} className='profile-img mt-3' alt="" />
            <div className='profile-title'>
              <p className="card-title text-center fw-bold">Welcome, <em>Kevin</em></p>
              <p className="card-text text-center">Fullstack Developer</p>
            </div>
          </div>
        </div>

        <div className="col-md-7 mt-4">
          <div className="card p-2">
            <form action="">
              <div className="card-title d-flex m-2 gap-3">
                <img src={("./../../1283.png_860.png")} className='profile-img mt-3' alt="" />
                <input type="text" className='form-control rounded-4 card-post' placeholder='Post Title' />
              </div>
              <textarea name="" className="form-control rounded-4" placeholder="Start a post" required></textarea>
              <button type='submit' className='btn btn-md btn-outline-info rounded-4 px-4 mt-2 post-btn'>Post</button>
            </form>
          </div>
        </div>

        <div className="col-md-3 mt-4 position-relative d-lg-block d-none">
          <div className="card m-auto position-fixed">
            <div className="card-title m-auto">
              <h3 className='mt-2'>Categories</h3>
            </div>
            <div className="card-body m-auto">
              <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Web Development</a> <br/>
              <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Data Science</a> <br/>
              <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Graphic Design</a>
              <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">More</a>
            </div>
          </div>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-7 mt-2 posted-job">
          <div className="card p-2">
            <div className="card-title">
              <h3>Recently Posted Jobs</h3>
            </div>

            <div className="card-body">
              <div className="posted-job-item">
                <div className="posted-job-img">
                  <img src={("./../../IT dev.webp")} className='img-fluid' alt="" />
                </div>
                <div className="posted-job-info">
                  <h4>Senior Frontend Developer</h4>
                  <p>Company Name</p>
                  <p>Location, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
        )
}

        export default Post