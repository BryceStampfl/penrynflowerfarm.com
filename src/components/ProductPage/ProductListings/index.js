import React from 'react';

import { Box, Center, Flex, Text } from '@chakra-ui/react'
import ProductCard from '../ProductCard'
import { DataContext } from '@/pages/_app';




const ProductListings = () => {

    const data = React.useContext(DataContext)

    return (
        <Box id='ProductListings' boxShadow={'md'}>
            <Flex flexDir={'column'} >
                <Box
                    padding={'3rem'}
                    bg='white'
                >
                    <Box mb='2rem'>
                        <Text fontSize={'2rem'} color='#63666A' >Products</Text>
                        <Text mt='0.5rem' fontSize={'0.85rem'} color='gray' >Showing 1-12 of 29 results</Text>

                    </Box>

                    <Box bg='white'>
                        <Center>
                            <Flex direction={'row'} wrap={'wrap'} justifyContent={'space-between'}>
                                {data.map((product) => {
                                    return <ProductCard key={product.id} title={product.name} src={product.imageUrl} description={product.description} />
                                })}
                                {data.map((product) => {
                                    return <ProductCard key={product.id} title={product.name} src={product.imageUrl} description={product.description} />
                                })}


                            </Flex>
                        </Center>
                    </Box >
                </Box>


            </Flex>

        </Box>
    )
}
export default ProductListings