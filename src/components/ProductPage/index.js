import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import ProductListings from './ProductListings'
import { Jumbotron } from '../SharedComponents/Jumbotron';

const ProductPage = () => {
    return (
        <Box maxW={'80rem'} mx='auto'  >
            <Jumbotron />

            <Flex gap={'1rem'} display='inline-flex' flexDir={['column', 'row']}>
                <ProductListings />
            </Flex >
        </Box >
    )
}
export default ProductPage