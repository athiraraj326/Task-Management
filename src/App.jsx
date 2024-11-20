import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
