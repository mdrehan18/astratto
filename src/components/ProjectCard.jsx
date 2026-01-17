import React from 'react'

const ProjectCard = ({title, category, image, description}) => {
  return (
    <div className='group rounded-3xl overflow-hidden shadow-md border border-gray-300 transition-transform duration-300 hover:shadow-xl
     hover:scale-105
    '>
        <div className='overflow-hidden'>
            <img 
            src={image} 
            alt={title}
            className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
            />
        </div>

        <div className='p-6'>
            <p className='text-sm leading-tight text-purple-600 mb-2'>{category}</p>
            <h3 className='text-xl font-semibold leading-snug mb-3'>{title}</h3>
            <p className='text-sm leading-relaxed text-gray-600'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard