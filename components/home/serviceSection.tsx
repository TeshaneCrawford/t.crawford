import React from 'react'
import Image from 'next/image'

const Services:React.FC = () => {
  return (
    <section className='py-16'>
      <h3 className='py-8 text-6xl font-semibold '>Benefits</h3>
      <div>
        <h2 className='py-1 text-3xl font-semibold'>Why should you hire me?</h2>
        <p className='py-2 leading-8 text-md'>
          When building an application, I focus on the user experience and
          performance. I use the latest technologies to build the best
          applications possible. I adhere to the best practices and standards
          to ensure that the application is scalable and maintainable.
        </p>
      </div>
      <div className='gap-10 lg:flex'>
        <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <Image src='/vercel.svg' alt='vercel' width={50} height={50} />
          <h3 className='pt-8 pb-2 text-lg font-medium'>Fast</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
        </div>
        <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <Image src='/vercel.svg' alt='vercel' width={50} height={50} />
          <h3 className='pt-8 pb-2 text-lg font-medium'>Fast</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
        </div>
        <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <Image src='/vercel.svg' alt='vercel' width={50} height={50} />
          <h3 className='pt-8 pb-2 text-lg font-medium'>Fast</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
          <p className='py-1'>lorem</p>
        </div>
      </div>
    </section>
  )
}

export default Services