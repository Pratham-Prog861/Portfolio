import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='w-full h-24 flex justify-center items-center text-3xl mt-5'>
        This are the Projects I have done so far
      </div>
      <div className='p-10'>
        <div className='w-96 rounded-2xl p-2'>
          <Image src="/vercel.svg" alt="logo" width={150} height={150} />  
          <h1 className='font-bold'>AI Connect Pro</h1>
          <p className='text-base mt-2'>This ai can helps you by finding solution of your problem</p>
          <div className='flex justify-between mt-3'>
            <Link 
              href="https://github.com/Pratham-Prog861/AI-Connect" 
              target="_blank"
              rel="noopener noreferrer"
              className='px-4 py-3 bg-blue-700 rounded-3xl cursor-pointer text-white hover:bg-blue-800 transition-colors'
            >
              Source Code
            </Link>
            <Link 
              href="https://aiconnectpro.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className='px-4 py-3 bg-blue-700 rounded-3xl cursor-pointer text-white hover:bg-blue-800 transition-colors'
            >
              Live Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page