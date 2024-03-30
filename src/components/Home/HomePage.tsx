import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { Jumbotron } from '../SharedComponents/Jumbotron';
import HomeProducts from './HomeProducts';
import ImageWithText from './ImageWithText/ImageWithText';
import { inter } from "@/pages/_app"
import { ClassNames } from '@emotion/react';

/*
import JumbotronImageOverlay from '../components/Jumbotron/JumbotronImageOverlay';
import IconWidgetTray from '@/components/IconWidgetTray'
*/

export const HomePage = () => {

    return (
        <Box mx={['0', 'auto']}>

            <Center>
                <Box>
                    <Jumbotron />
                    <Box >
                        <Box>
                            <Flex justifyContent={'center'}

                            >
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
                    </Box>
                </Box>
            </Center>

        </Box >
    )

}
export default HomePage;