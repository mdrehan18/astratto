import React from 'react'
import{
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaBehance,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='contact' className='w-full bg-black text-gray-300' >
        <div className='w-full max-w-7xl mx-auto px-12 md:px-6 py-10 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div>
                <h2 className='text-2xl font-semibold text-white'>
                    <span className='text-purple-500'>Astratto</span>
                </h2>
                <p className='mt-4 text-sm leading-relaxed text-gray-400'>
                    Astratto is a creative studio crafting bold brand identities,
                    immersive UI/UX and motion-driven digital experiences.
                </p>
            </div>

            <div>
                <h3 className='text-lg text-white mb-4'>Quick Links</h3>
                <ul className='grid grid-cols-2 space-y-3 text-sm'>
                    <li className="relative w-fit cursor-pointer group">
                        <span className="text-sm transition-colors duration-300 group-hover:text-purple-400">
                            Home
                        </span>

                        <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    
                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>
                            About
                        </span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>

                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>Services</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>

                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>Work</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>

                    <li>
                        <span>Contact</span>
                        <span></span>
                    </li>
                </ul>
                    
            </div>

            <div>
                <h3 className='text-lg text-white mb-4'>Services</h3>
                <ul className='grid grid-cols-2 space-y-3 text-sm'>

                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>Brand Identity</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>

                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>UI / UX Design</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>
                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>Motion Graphics</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>
                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>2D / 3D Animation</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>
                    <li className='relative w-fit cursor-pointer group'>
                        <span className='text-sm transition-colors duration-300 group-hover:text-purple-400'>Web Design</span>
                        <span className='absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100'></span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-lg text-white mb-4'>Contact</h3>
                <ul className='grid grid-cols-2 space-y-3 text-sm'>
                    <li>mdr106123@gmail.com</li>
                    <li>📍Deoghar,Jharkhand, India</li>
                </ul>

                <div className='flex gap-14 md:gap-4 mt-6'>
                    <a href="#" className='group relative'>
                        <FaInstagram 
                        size={28} 
                        className='transition-all duration-300 group-hover:text-purple-400 group-hover:scale-105'
                        />
                    </a>

                    <a href="#" className='group relative'>
                        <FaFacebook 
                        size={28}
                        className='transition-all duration-300 group-hover:text-purple-400 group-hover:scale-105'
                        />
                    </a>

                    <a href="#" className='group relative'>
                        <FaTwitter
                        size={28}
                        className='transition-all duration-300 group-hover:text-purple-400 group-hover:scale-105'
                        />
                    </a>

                    <a href="#" className='group relative'>
                        <FaBehance
                        size={28}
                        className='transition-all duration-300 group-hover:text-purple-400 group-hover:scale-105'
                        />
                    </a>
                </div>
            </div>
        </div>

        <div className='border-t border-gray-800 py-6 text-center text-sm text-gray-500'>
                © 2026 Astratto. All rights reserved.
        </div>
        
    </footer>
  )
}

export default Footer