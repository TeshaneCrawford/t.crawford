import React from 'react'
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import Image from 'next/image';


const Hero: React.FC = () => {
  return (
    <section className='min-h-full'>
      <div className='py-6 mt-8 text-center'>
        <div className="">
          <h1 className='text-5xl font-extrabold lg:text-8xl'>
            Teshane is a <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>full-stack</span> developer
          </h1>
          <p className='py-6 mt-4 text-lg text-gray-500'>
            I'm a full-stack developer with a passion for building web applications
            and APIs.
          </p>
        </div>
        <button type='button' className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 focus:ring-offset-2">
          Resume</button>
      </div>
    </section>
  )
}

export default Hero

