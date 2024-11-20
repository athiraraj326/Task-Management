import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import loginImg from '../assets/loginImg.avif'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'

const Auth = ({ insideRegister }) => {
  const navigate = useNavigate()
  const [inputData,setInputData] = useState({
    username:"",email:"",password:""
  })
  // console.log(inputData);
  
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = inputData
    if(username && email && password){
      // alert('make api call')
      try{
        const result = await registerAPI(inputData)
        console.log(result.data);
        if(result.status==200){
          alert(`Welcome ${result.data?.username}, Please login to explore our website!!!`)
          navigate('/login')
          setInputData({username:"",email:"",password:""})
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setInputData({username:"",email:"",password:""})
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely")
    }
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    const {email,password} = inputData
    if(email && password){
      try{
        const result = await loginAPI(inputData)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          navigate('/tasks')
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely")
    }
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container row align-items-center w-75 border shadow">
          <div className='col-lg-6'>
            <img width={'350px'} src={loginImg} alt="" />
          </div>
          <div className='col-lg-6 p-3'>
            <div className='text-center mb-3'>
              <i class="fa-solid fa-user fs-3 mb-2"></i>
              <h3>{insideRegister ? "Register" : "Login"}</h3>
            </div>
            {
              insideRegister &&
              <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                <Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Username" />
              </FloatingLabel>
            }
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
            </FloatingLabel>
            {
              insideRegister ?
              <>
                <button onClick={handleRegister} className='btn btn-warning rounded mb-3'>Register</button>
                <p>Already a user? <Link to={'/login'}> Login</Link></p>
              </>
              :
              <>
                <button onClick={handleLogin} className='btn btn-warning rounded mb-3'>Login</button>
                <p>New user? <Link to={'/register'}> Register</Link></p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth