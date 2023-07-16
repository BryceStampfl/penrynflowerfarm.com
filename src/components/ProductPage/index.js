import React from 'react';

import { Box, Flex } from '@chakra-ui/react'

import SearchBar from './SearchBar'
import ProductListings from './ProductListings'
import ProductCategories from './ProductCategories'

const ProductPage = () => {

    return (
        <Box maxW={'80rem'} mx='auto'  >
            <Flex gap={'2rem'} display='inline-flex' flexDir={['column', 'row']}>
                <Box>
                    <Flex flexDir={'column'} minWidth={['auto', '20rem']} >
                        <SearchBar />
                        <ProductCategories />

                    </Flex>
                </Box>
                <ProductListings />
            </Flex >
        </Box >
    )
}
export default ProductPage