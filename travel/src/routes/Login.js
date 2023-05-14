import React from 'react'
import Navbar from '../Components/Navbar'
import LoginForm from '../Components/LoginForm'
import Footer from '../Components/Footer';
import bgImage from '../assets/login-2.jpg';


export default function Login() {
  return (
    <div >
     
      <img alt='background'
      src={bgImage}/> 
      <LoginForm/>
    

      
    </div>
  )
}
