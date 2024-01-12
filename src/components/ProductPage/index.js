import React from 'react';

import { Box, Flex } from '@chakra-ui/react'

import SearchBar from './LegacyProductComponents/SearchBar'
import ProductListings from './ProductListings'
import ProductCategories from './LegacyProductComponents/ProductCategories'
import { Jumbotron } from '../SharedComponents/Jumbotron';


const ProductPage = () => {

    return (
        <Box maxW={'80rem'} mx='auto'  >
            <Jumbotron />

            <Flex display='inline-flex' flexDir={['column', 'row']}>
                <ProductListings />
            </Flex >
        </Box >
    )
}
export default ProductPage