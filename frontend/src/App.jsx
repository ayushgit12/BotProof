import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaptchaTest from './components/captcha.jsx'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/captcha" element={<CaptchaTest />} />
  </Routes>
</Router>


  
  );
}

export default App
