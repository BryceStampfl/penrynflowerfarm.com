import React from 'react'

import { Box, Text, Divider } from '@chakra-ui/react'

import CategoryItem from './CategoryItem'

const ProductCategories = () => {

    return (
        <Box mt='2rem'
            boxShadow={'md'}
            p='1rem'
            bg='white'

        >

            <Box
                color='#63666A'
                bg={'white'}
            >
                <Text mb='1rem' fontSize={'2rem'}>Product Categories</Text>
                <CategoryItem title={'Flowers'} />
                <CategoryItem title={'Bouquets'} />
                <CategoryItem title={'Sunflowers'} />
                <CategoryItem title={'Seeds'} />
                <CategoryItem title={'Wreaths'} />






            </Box>
        </Box>
    )
}
export default ProductCategories