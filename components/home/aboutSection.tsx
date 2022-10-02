import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section>
      <div>
        <h2>About</h2>
        <div className='md:columns-2'>
          <div>
            <Image src='/tesh.jpg' alt='boy' height={300} width={300}></Image>
          </div>
          <div>
            <p>
              Hi, I&apos;m Teshane J. Crawford. I help people make the world better through quality software.
            </p>
            <p>
              I&apos;m also a big extreme sports enthusiast. When I&apos;m not hanging out with my friends & family or at the computer you can find me at the ball ground playing Football.
            </p>
          </div>
        </div>
        {/* <div>
          <p>
            I have experience building web applications, mobile applications, and desktop applications.
            I have experience with a variety of technologies and languages. I'm always learning and growing as a developer.
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default About