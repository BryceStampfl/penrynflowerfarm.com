import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import LogoUrl from '../../../../public/Logo/logo2.png'

export const Logo = () => {

    return (
        <Box id='logoIcon' pt='1rem' >
            <Center>
                <Image
                    width={['12rem', '16rem']}
                    src={LogoUrl.src}
                    alt='logo'
                />
            </Center>
        </Box>
    )
}
export default Logo;