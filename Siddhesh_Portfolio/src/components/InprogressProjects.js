import React from 'react'
import data from '../data.js'
import Project from './Project.js'

const InprogressProjects = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-5 mt-4">
        <h2 className='custom-font pb-3 text-center'>In Progress: </h2>
        {data.InprogressProjectsData.map((project) => {
          return(
            <div className="col-12 d-flex justify-content-center" key={project.id}>
                <Project id={project.id}
                  image={project.img}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  desc={project.description}
                />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InprogressProjects