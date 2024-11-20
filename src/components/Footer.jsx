import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div style={{ height: '300px', marginTop:'100px' }} className='p-5 w-100 text-light bg-primary'>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column mt-3">     
          <h5><i class="fa-solid fa-list-check me-2"></i>Task Management</h5>
          <p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5>Links</h5>
          <div className='d-flex flex-column'>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5>Guides</h5>
          <div className='d-flex flex-column'>
            <Link style={{ textDecoration:'none',color:'white'}}>React</Link>
            <Link style={{ textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link style={{ textDecoration:'none',color:'white'}}>React Router</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between mt-3">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" className='form-control' placeholder='Enter your email here' />
            <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
            <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; June 2024, Task Management. Built with React</p>
    </div>
    </>
  )
}

export default Footer