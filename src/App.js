import React, {useState} from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert] =useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    setAlert(null);
   },3000)
  }
  const toggleMode=() =>{
    if(mode=== 'light'){
      setMode("dark");
      document.body.style.background ='#111168';
      showAlert("Dark Mode has enabled", "sucess")
    }
    else{
      setMode("light");
      document.body.style.background ='white';
      showAlert("Light Mode has enabled", "sucess")
    }
  }
  return (
    <>
    
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <Routes>
    
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>} />
        
      <Route exact path="/about" element={<About  mode={mode} />} />
    
    </Routes>
  </BrowserRouter>,
</>
  )
}
