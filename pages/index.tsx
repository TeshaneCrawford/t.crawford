import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Code from '../components/Code'
import Animation from '../shared/util/service/Animation'
import { Text, Box } from '@chakra-ui/react'
import Toggle from '../components/Toggle'
import { Navbar } from '../Layout/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <header>
          <Navbar />
        </header>
        <Toggle />
        <Code />
        <Animation />
        <div>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Welcome to my portfolio, Teshane Crawford.
          </Text>
        </div>
        <div>
          <Box
            as='button'
            p={4}
            color='white'
            fontWeight='bold'
            borderRadius='md'
            bgGradient='linear(to-r, teal.500, green.500)'
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
          >
            Click here
          </Box>
        </div>
      </main>
    </>
  )
}

export default Home
