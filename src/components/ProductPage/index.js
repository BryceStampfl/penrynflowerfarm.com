import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import ProductListings from './ProductListings'
import { Color } from '@/Styles/BaseStyle'

const ProductPage = () => {
    return (
        <Box maxW={'80rem'} mx='auto' backgroundColor={Color.background} >
            <Flex gap={'1rem'} display='inline-flex' flexDir={['column', 'row']}>
                <ProductListings />
            </Flex >
        </Box >
    )
}
export default ProductPage