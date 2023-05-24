
import { Image, Box, Center } from "@chakra-ui/react"

export const Jumbotron = () => {
    return (
        <Box mb='15rem' id='imageBox' >
            <Image zIndex={-1} id='Image'
                // display={'block'}
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