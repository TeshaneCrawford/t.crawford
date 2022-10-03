import React from 'react'
import Image from 'next/image'
import {MySkills} from '../../constant/skills'

const Skills:React.FC = () => {
  return (
    <section>
      <h2>
        <span className='text-3xl'>Technical Stack</span>
      </h2>
      <div className='grid gap-10 lg:grid-cols-3'>
        <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <h3 className='py-2 text-lg font-medium'>Languages</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          {MySkills.languagesAndTools.map((skill, index) => (
                <Image
                  key={`$skill-${index}`}
                  src={`/svg/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
        </div>
        <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <h3 className='py-2 text-lg font-medium'>Libraries and Frameworks</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          {MySkills.librariesAndFrameworks.map((skill, index) => (
                <Image
                  key={`$skill-${index}`}
                  src={`/svg/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
        </div>
       <div className='p-10 my-10 text-center shadow-lg rounded-xl'>
          <h3 className='py-2 text-lg font-medium'>DevOps</h3>
          <p className='py-2'>
            I use the latest technologies to build the best applications
            possible. I adhere to the best practices and standards to ensure
            that the application is scalable and maintainable.
          </p>
          <h4 className='py-4'>Tools</h4>
          {MySkills.tools.map((skill, index) => (
                <Image
                  key={`$skill-${index}`}
                  src={`/svg/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
        </div>
      </div>
    </section>
  )
}

export default Skills