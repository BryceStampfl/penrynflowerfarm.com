import { Box, Text, Button } from '@chakra-ui/react'
import { Center, Container, Flex, Image } from '@chakra-ui/react'

export const LogoHeader = () => {

    return (
        <Box id='logoContainer' pt='1rem' >
            <Center>
                <Image
                    width={['13rem', '20rem']}
                    src='logo2.png'
                />
            </Center>
        </Box>
    )
}