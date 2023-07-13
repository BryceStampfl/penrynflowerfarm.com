
import { Image, Box, Center } from "@chakra-ui/react"

export const Jumbotron = () => {
    return (
        <Box mb={['0rem', '1rem']} id='jumbotron' >
            <Image
                maxWidth={['auto', 'auto', '80rem']}
                width={'100%'}
                height={['12rem', 'auto']}
                objectFit={'cover'}
                alt='flower bouquet'
                src='NewBanner.jpg'
                mx='auto'
                mb={['1rem', 'auto']}
            />
        </Box>

    )
}