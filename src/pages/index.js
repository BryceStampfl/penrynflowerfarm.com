import React from 'react'
import HomeProducts from '@/components/Home/HomeProducts';
import { Center, Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { Jumbotron } from '@/components/Jumbotron'
import JumbotronImageOverlay from '../components/Jumbotron/JumbotronImageOverlay';

const Home = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']}>
            <Center>
                <Box maxWidth='80rem' >
                    <Jumbotron />
                    <HomeProducts />
                    <JumbotronImageOverlay />
                </Box>
            </Center>
        </Box >
    );
}

export default Home;