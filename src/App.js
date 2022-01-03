import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" />
    <div className="container my-3">

    <TextForm heading="Enter the text to analyse below"/>
    {/* <About/> */}
    </div>
</>
  )
}
