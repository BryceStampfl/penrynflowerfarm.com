import { Box, Flex, Image } from "@chakra-ui/react"
import Owner from '../../../public/About/Owner.jpg'
import Husband from '../../../public/About/Husband.jpg'


const About = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']} >

            <Flex flexDir={'row'} gap='3rem' justifyContent={'center'} >

                <Box maxW={'30rem'}>
                    <Image src={Owner.src} />

                </Box>

                <Box maxW={'30rem'}>
                    <Image src={Husband.src} />

                </Box>
            </Flex>

        </Box>
    )
}

export default About;