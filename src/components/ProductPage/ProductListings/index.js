import React from 'react';

import { Box, Center, Flex, Text } from '@chakra-ui/react'
import ProductCard from '../ProductCard'
import { DataContext } from '@/pages/_app';




const ProductListings = () => {

    const data = React.useContext(DataContext)

    return (
        <Box id='ProductListings' border={['0px', '1px']}>
            <Flex flexDir={'column'} >
                <Box
                    px={'0rem'}
                    py={'1rem'}
                    bg='#fafafa'
                >
                    <Box >
                        <Center>
                            <Flex direction={'row'} wrap={'wrap'} gap={'1rem'} justifyContent={'flex-start'} >
                                {data.map((product) => {
                                    return <ProductCard key={product.id} product={product} />
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