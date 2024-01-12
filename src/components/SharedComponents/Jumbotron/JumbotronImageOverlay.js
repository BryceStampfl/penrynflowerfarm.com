import React from 'react'
import { Image, Box, Center, Flex, Grid } from "@chakra-ui/react"

const JumbotronImageOverlay = () => {

    return (
        <Box mb={['0rem', '1rem']} id='jumbotron' maxW={'80rem'} >

            <div style={{
                backgroundImage: `url('/texture.jpg')`,
            }}>
                <Box maxW={['auto', '80rem']}
                    py='3rem'
                >
                    <Flex
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        maxW={'80rem'}
                        flexDir={['column', 'row']}
                    >
                        <Image
                            maxW={'15rem'}
                            alt='img'
                            src='IMG_0164.jpg'
                        />
                        <Image
                            maxW={'15rem'}
                            src='IMG_0149.jpg'
                            alt='img'
                        />
                        <Image
                            maxW={'15rem'}
                            src='IMG_0196.jpg'
                            alt='img'
                        />
                    </Flex>
                </Box>
            </div >



        </Box >
    )
}
export default JumbotronImageOverlay;


