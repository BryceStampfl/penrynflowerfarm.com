import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'

export const Logo = () => {

    return (
        <Box id='logoIcon' pt='1rem' >
            <Center>
                <Image
                    width={['12rem', '16rem']}
                    src='logo2.png'
                    alt='logo'
                />
            </Center>
        </Box>
    )
}
export default Logo;