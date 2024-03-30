import { Box, Text, Image } from "@chakra-ui/react"
import Owner from '../../../public/About/Owner.jpg'
import Husband from '../../../public/About/Husband.jpg'


const About = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']} >

            <Box maxW={'30rem'}>
                <Image src={Owner.src} />

            </Box>

        </Box>
    )
}

export default About;