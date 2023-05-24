import React from 'react';

import { Box, SimpleGrid, Text, Button, Center, Divider } from '@chakra-ui/react'
import { HomeCard } from '../Card/HomeCard';


const HomeProducts = () => {
    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                <Text fontSize={'4rem'} color='#ff9a8a'>
                    Flower Bouquets                </Text>

                <Center>
                    <SimpleGrid columns={[1, 2, 3, 4, 4]} spacing={2}>
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />

                        <HomeCard />
                        <HomeCard />
                    </SimpleGrid >
                </Center>
                <Button mt='1rem'
                    borderRadius={50}
                    width='auto'
                    height='auto'
                    fontSize={'3rem'}
                    color='white' backgroundColor='#ff9a8a'>View More Flowers</Button>

            </Box >
            <Divider />
        </>
    )
}
export default HomeProducts
