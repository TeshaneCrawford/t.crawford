import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import { Box } from '@chakra-ui/react'
import Hero from '../Layout/Hero'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <Hero />
        </div>
      </main>
    </>
  )
}

export default Home
