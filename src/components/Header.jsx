import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className="p-3 position-fixed w-100 bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-light fw-bolder'>
            <i class="fa-solid fa-list-check me-2"></i>Task Management
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header