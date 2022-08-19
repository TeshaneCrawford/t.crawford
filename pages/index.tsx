import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import { Box } from '@chakra-ui/react'
import Hero from '../Layout/Hero'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <Hero />
          <button className="btn-primary">
            Save changes
          </button>
        </div>
      </main>
    </>
  )
}

export default Home
