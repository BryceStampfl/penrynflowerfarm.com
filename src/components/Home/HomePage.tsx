import { Box, Center, Flex } from '@chakra-ui/react'
import { Jumbotron } from '../SharedComponents/Jumbotron';
import HomeProducts from './HomeProducts';
import ImageWithText from './ImageWithText/ImageWithText';
/*
import JumbotronImageOverlay from '../components/Jumbotron/JumbotronImageOverlay';
import IconWidgetTray from '@/components/IconWidgetTray'
*/

export const HomePage = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']}>
            <Center>
                <Box maxWidth='80rem' >
                    <Jumbotron />
                    <Flex flexDir={['column', 'row']} maxW='80rem' gap={'1rem'}>
                        <ImageWithText url='/Roses.jpg' text='Gift Cards' link='/subscription/page' />
                        <ImageWithText url='/bouquet.jpg' text='Subscription' link='/subscription/page' />
                        <ImageWithText url='/jumbo6.jpg' text='Explore Flowers' link='/flowers/page' />

                    </Flex>
                    <HomeProducts />
                </Box>
            </Center>
        </Box >
    )

}
export default HomePage;