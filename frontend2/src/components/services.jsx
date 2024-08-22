import React from 'react'
import '../index.css'
import { FaPython } from 'react-icons/fa'


export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-5xl'>Our Tech Stack</h2>
          <p className='text-black'>
            We have worked upon this website using the following technologies.
          </p>
        </div>
        <div className='flex justify-around'>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          <div>
            <i className='fa relative'><FaPython size={50} className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' /></i>
            <p>PYTHON</p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
