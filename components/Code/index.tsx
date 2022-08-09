import React from 'react'
import { Code, Stack } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <div>
                <Stack direction='row'>
                    <Code colorScheme='yellow' children='yarn add chakra' />
                </Stack>
            </div>
        </>
    )
}

export default index