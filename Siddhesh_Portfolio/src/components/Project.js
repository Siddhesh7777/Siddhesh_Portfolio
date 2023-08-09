import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
 
function Project({id, image, name, stack, live, source, desc}) {
  return (
    <div className="">
        <div className="card mb-5" style={{maxWidth:'900px'}}>
        <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
            <div className="">
                <img src={image} className="img-fluid rounded-start project-img" alt={name} />
            </div>
            <div className="">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="mt-5 align-text-bottom">
                        <p className="card-text">{stack}</p>
                            <p className="card-text d-flex gap-4">
                                <a href={live} target="_blank" rel="noreferrer" className='link'>
                                    Live Site <BiLinkExternal style={{color: 'hsl(205, 72%, 37%)'}}/>
                                </a>
                                <a href={source} target="_blank" rel="noreferrer" className='link'>
                                    Source Code <AiOutlineGithub style={{color: 'hsl(205, 72%, 37%)'}} />
                                </a>    
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Project