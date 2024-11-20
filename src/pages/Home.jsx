import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/HomeImg.jpg'

const Home = () => {
  return (
    <>
      <div style={{paddingTop:'100px'}} className="d-flex">
        <div className='d-flex flex-column justify-content-center p-5'>
          <h1 className='fw-bolder mb-5'>Task Management App</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam repudiandae a. Harum corporis voluptas temporibus molestias quo odio ab, facere itaque, quis sed ad voluptatem commodi, architecto tenetur. Delectus?</p>
          <Link to={'/register'}><button className='btn btn-warning rounded mt-3'>Get Started</button></Link>
        </div>
        <img src={HomeImg} alt="" />
      </div>
    </>
  )
}

export default Home