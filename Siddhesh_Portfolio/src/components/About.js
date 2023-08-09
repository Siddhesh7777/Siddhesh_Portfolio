import React from 'react'
import { FaBootstrap } from 'react-icons/fa'
import resume from '../assets/siddhesh_resume.pdf'

const About = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
        I'm a full stack web developer with 1+ years of experience in web development and coding. I love to create responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap,Node js ,expressjs and mongo Db. 
       and  having good coding skills. I've done multiple small projects to learn basics and now doing more complex projects. 

      </p>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
    
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/n/49/node-js.svg" alt="git" width="40" height="40"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="40" height="40"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/m/25/mongodb.svg" alt="git" width="40" height="40"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/s/14/socket-io.svg" alt="git" width="35" height="35"/>

        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/>
        
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
      </p>
      
    </div>
  )
}

export default About