import { Box, Center, Flex, Text, AspectRatio } from '@chakra-ui/react'
import { Jumbotron } from '../SharedComponents/Jumbotron';
import HomeProducts from './HomeProducts';
import { inter } from "@/pages/_app"

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export const HomePage = () => {

    return (
        <Box mx={['0', 'auto']}>
            <Center>
                <Box>
                    <Jumbotron />
                    <Box p='1rem'>
                        <Box>
                            <Flex justifyContent={'center'}>
                                <Text
                                    className={inter.className}
                                    fontSize={'2rem'}
                                >New Arrivals</Text>

                            </Flex>
                        </Box>
                        <Flex flexDir={['column', 'row']} maxW='80rem' gap={'1rem'}>
                            {/* <ImageWithText url='/HomePage/ImageOne.jpg' text='Explore Flowers' link='/flowers/page' />
                            <ImageWithText url='/HomePage/ImageThree.jpg' text='Subscription & Gift Cards' link='/subscription/page' />
                            <ImageWithText url='/HomePage/ImageTwo.jpg' text='Contact' link='/about/page' /> */}

                        </Flex>
                        <HomeProducts />

                        <Flex>
                            <ReactPlayer
                                url={'HomePage/Video1.mp4'}
                                width={'50%'}
                                controls={true}
                            />
                            <ReactPlayer
                                url={'HomePage/Video2.mp4'}
                                width={'50%'}
                                controls={true}
                            />
                        </Flex>



                    </Box>
                </Box>
            </Center>

        </Box >
    )

}
export default HomePage;