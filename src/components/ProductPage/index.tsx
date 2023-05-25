import React from 'react';

import { Box, SimpleGrid, Text, Center, Divider, Flex } from '@chakra-ui/react'
import { ProductCard } from '../Card';
import HorizontalCard from '../Card/HorizontalCard'

const ProductPage = () => {
    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                <Text fontSize={'4rem'} color='#ff9a8a'>
                    Flower Bouquets                </Text>

                <Center>
                    <Flex direction={'column'}>

                        <HorizontalCard />
                        <HorizontalCard />

                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                    </Flex>
                    {/* <SimpleGrid columns={[1, 1, 3, 3, 3]} spacing={2} maxWidth={'50rem'} >
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </SimpleGrid > */}
                </Center>
            </Box >
            <Divider />
        </>
    )
}
export default ProductPage
