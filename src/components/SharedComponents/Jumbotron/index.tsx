
import { Image, Box, Center } from "@chakra-ui/react"
import Jumbo from '../../../../public/Banner/NewBanner.jpg'


export const Jumbotron = () => {
    return (
        <Box mb={['0rem', '1rem']} id='jumbotron' >
            <Image

                width={'100%'}
                height={['12rem', 'auto']}
                objectFit={'cover'}
                alt='flower bouquet'
                src={Jumbo.src}
                mx='auto'
                mb={['1rem', 'auto']}
            />
        </Box>

    )
}