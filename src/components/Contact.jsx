import React from 'react'
import LinkedinImg from '../assets/linkedin.png';
import EmailImg from '../assets/gmail.png';
import Twitter from '../assets/twitter.png'
const Contact = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

  return (
    <div name='contact' className='w-full h-screen bg-[#070708] flex justify-center items-center p-4 flex-col'>
     
           <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5430a8] text-gray-300'>Contact</p>
         </div>
         <div className='flex space-x-24'>
         <div >
          <a href='https://www.linkedin.com/in/sthitaprajna-jena-624376191/'>
          <img className='w-40 mx-auto' src={LinkedinImg} alt="HTML " onClick={() => { openInNewTab('') }}   />

          </a>
                
              </div>
              <div >
              
                <img className='w-40 mx-auto cursor-pointer' src={EmailImg} alt="HTML icon"  onClick={() => window.location = 'mailto:spjena343@gmail.com'}  />

              
                
              </div>
              <div>
                <a href='https://twitter.com/sthitaprajna_26'>
                <img className='w-40 mx-auto' src={Twitter} alt="HTML icon" />

                </a>
              
              </div>
          </div>
         
    </div>
  )
}

export default Contact