import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </header>
    )
}

export default Toggle