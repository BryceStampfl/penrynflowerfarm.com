import React from 'react'
import { Image, Box, Center, Flex, Grid } from "@chakra-ui/react"

const JumbotronImageOverlay = () => {

    return (
        <Box mb={['0rem', '1rem']} id='jumbotron' maxW={'80rem'} >
            {/* <Image
                position={'relative'}
                maxWidth={['auto', 'auto', '80rem']}
                width={'100%'}
                height={['12rem', '40rem']}
                objectFit={'cover'}
                src='texture.jpg'
                mx='auto'
                mb={['1rem', 'auto']}
            /> */}

            <div style={{
                backgroundImage: `url('/texture.jpg')`,
            }}>
                <Box maxW={['auto', '80rem']}
                    py='3rem'
                >
                    <Flex
                        justifyContent={'space-around'}
                        maxW={'80rem'}
                        flexDir={['column', 'row']}
                    >
                        <Image
                            maxW={'15rem'}
                            src='IMG_0164.jpg'
                        />
                        <Image
                            maxW={'15rem'}
                            src='IMG_0149.jpg'

                        />
                        <Image
                            maxW={'15rem'}
                            src='IMG_0196.jpg'

                        />
                    </Flex>
                </Box>
            </div >

            {/* <Box maxW={'80rem'} zIndex={10} position={'absolute'}
                top='65%'

            >
                <Flex justifyContent={'space-around'} maxW={'80rem'} width={['auto', '80rem']}>
                    <Image
                        maxW={'15rem'}
                        // position={'relative'}
                        objectFit={'cover'}
                        top={'60%'}
                        // left={'30%'}
                        src='IMG_0164.jpg'
                    />
                    <Image
                        maxW={'15rem'}
                        // position={'relative'}
                        objectFit={'cover'}
                        top={'60%'}
                        // left={'45%'}
                        src='IMG_0149.jpg'

                    />
                    <Image
                        maxW={'15rem'}
                        // position={'relative'}
                        objectFit={'cover'}

                        top={'60%'}
                        // left={'60%'}

                        src='IMG_0196.jpg'

                    />
                </Flex>
            </Box> */}

        </Box >
    )
}
export default JumbotronImageOverlay;


