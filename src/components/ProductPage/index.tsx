import React from 'react';

import { Box, SimpleGrid, Text, Button, Center, Divider } from '@chakra-ui/react'
import { ProductCard } from '../Card';


const ProductPage = () => {
    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                <Text fontSize={'4rem'} color='#ff9a8a'>
                    Flower Bouquets                </Text>

                <Center>
                    <SimpleGrid columns={[1, 1, 3, 3, 4]} spacing={2}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </SimpleGrid >
                </Center>
                <Button
                    borderRadius={50}
                    width='auto'
                    height='auto'
                    fontSize={'4rem'}
                    color='white' backgroundColor='#ff9a8a'>View More Flowers</Button>

            </Box >
            <Divider />
        </>
    )
}
export default ProductPage
