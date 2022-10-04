import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section className='py-16'>
      <div>
        <h2 className='py-8 font-bold text-center text-slate-600'>
        <span className='text-6xl hover:underline'>About Me</span>
        </h2>
        <div className='md:columns-2'>
          <div className='py-8 text-center'>
            <Image src='/tesh.jpg' alt='boy' height={300} width={300}/>
          </div>
          <div className='py-8'>
            <p className='font-sans text-2xl font-semibold text-center'>
              Hi, I&apos;m Teshane J. Crawford. I help people make the world better through quality software.
            </p>
            <br />
            <p className='font-sans text-2xl font-semibold text-center text-slate-500'>
              I&apos;m also a big extreme sports enthusiast. When I&apos;m not hanging out with my friends & family or at the computer you can find me at the ball ground playing Football.
            </p>
          </div>
        </div>
        <div>
          <p className='font-sans text-4xl font-semibold text-center'>
            I have experience building web applications, mobile applications, and desktop applications.
            I have experience with a variety of technologies and languages. I&apos;m always learning and growing as a developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About