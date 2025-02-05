import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import Logo from './Logo'
import Nav from './Nav'
import Sidebar from './Sidebar'
import MapMethod from './Lab 16/MapMethod'
import Faculty from './Lab 16/Faculties_table'
import Student_table from './Lab 16/Student_table'
import Product_table from './Lab 16/Product_table'
// import Student from './Lab 16/Student'
import Product from './Lab 16/Product'
import Layout from './Lab 17/Layout'
import Home from './Lab 17/Home'
import About from './Lab 17/About'
import Contact from './Lab 17/Contact'
import Student from './Lab 17/Student'
import Course from './Lab 17/Course'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg border border-info bg-body-tertiary">
        <div className="container-fluid">
          <Logo />
          <Nav />
        </div>
      </nav>
      <div className='row'>
        <div className='col-3  border border-info'>
          <Sidebar />
        </div>
      </div> */}
      {/* <div className="d-flex justify-content-center flex-row">
        <Student />
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path='*' element={<h1>Page not Found</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
