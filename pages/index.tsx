/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  return (
    <>
      <main sx={{ bg: 'background'}}>
        <h1 sx={{ fontweight: 'bold', color: 'primary' }}>
          Hello Next.js, Lets goooo yehhhh!!
        </h1>
      </main>
    </>
  )
}

export default Home
