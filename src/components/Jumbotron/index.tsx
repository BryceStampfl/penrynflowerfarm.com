
import { Image, Box, Center } from "@chakra-ui/react"

export const Jumbotron = () => {
    return (
        <Box mb={['0rem', '1rem', '5rem', '7rem', '7rem']} id='imageBox' >
            <Image
                zIndex={-1}
                top={'0%'}
                maxWidth={['auto', 'auto', '80rem']}
                width={'100%'}
                src='jumbo7b.jpg'
                position={'absolute'}
                mx='auto'

                left={0}
                right={0}
                bottom={0}



            />
        </Box>

    )
}