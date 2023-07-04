import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Teacher from './components/Admin/Teacher'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './redux/actions/loginAction'
// import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';


const App = () => {
  // const { isAuthentication} = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/admin' element={<Admin />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/admin/teacher' element={<Teacher />} />


    </Routes>
    <Footer />
    <ToastContainer />
  </BrowserRouter>
}

export default App
