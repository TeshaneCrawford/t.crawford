import React from 'react'
import { Code, Stack } from '@chakra-ui/react'

const index = () => {
    return (
        <div>
            <Stack direction='row'>
                <Code children='console.log(welcome)' />
                <Code colorScheme='red' children="const chakra = 'awesome!'" />
                <Code colorScheme='yellow' children='yarn add chakra' />
            </Stack>
        </div>
    )
}

export default index