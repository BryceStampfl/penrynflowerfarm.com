
import ImageWidget from '@/components/ImageWidget';
import HomeProducts from '@/components/ProductPage/HomeProducts';
import { WelcomeMessage } from '@/components/WelcomeMessage';
import { Center, Box, Flex, Image, Text } from '@chakra-ui/react'
import IconWidgetTray from "@/components/IconWidgetTray"

const Home = () => {
    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']}>
            <Center>
                <Box maxWidth='80rem' >
                    <WelcomeMessage />

                    <Flex direction={['column', 'row']} maxWidth={'1280px'}>
                        <Box pr={['0', '0.5rem']} mb={['0.5rem', '0']}>
                            <Image
                                objectFit={'contain'}
                                maxWidth='100%'
                                height='auto'
                                src='basketSub.jpg' />
                        </Box>


                        <Box pl={['0', '0.5rem']}>
                            <Image

                                objectFit={'contain'}
                                maxWidth='100%'
                                height='auto'
                                src='giftcard.jpg' />
                        </Box>
                        <Box pl={['0', '0.5rem']}>
                            <Image

                                objectFit={'contain'}
                                maxWidth='100%'
                                height='auto'
                                src='giftcard.jpg' />
                        </Box>

                    </Flex>
                    <IconWidgetTray />

                    <ImageWidget />
                    <HomeProducts />

                </Box>
            </Center>
        </Box >
    );
}

export default Home;