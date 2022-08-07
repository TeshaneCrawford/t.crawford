import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Code from '../components/Code'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Code />
        <h1>
          Hello Next.js, Lets goooo yehhhh!!
        </h1>
      </main>
    </>
  )
}

export default Home
