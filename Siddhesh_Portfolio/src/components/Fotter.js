import React from 'react'
import './Footer.css'
import { FaBootstrap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import leetcode from "../assets/leetcode.png"

export default function Fotter() {
  return (
    <div className='sd'><h2>
<a href='mailto: siddheshspatil2002@gmail.com'> Email:siddheshspatil2002@gmail.com</a>
  
    </h2>
    <a href='https://github.com/siddhesh7777'><img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="35" height="35"/></a>
    <a href='https://www.linkedin.com/in/siddhesh-patil-507b921b8/'><img className='m-2' src='https://cdn.cdnlogo.com/logos/l/37/linkedin.svg' width="auto" height="80"/></a>
    <a href='https://twitter.com/siddhes32629479'><img className='m-2' src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg" alt="git" width="35" height="35"/></a>

     <a href='https://leetcode.com/siddheshspatil2002/'><img className='m-2' src={leetcode} alt="git" width="35" height="35"/></a>
    </div>
    

    
  )
}
