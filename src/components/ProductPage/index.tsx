import React from 'react';

import { Box, SimpleGrid, Text, Center, Divider, Flex } from '@chakra-ui/react'
import HorizontalCard from '../Card/HorizontalCard'

const ProductPage = () => {
    return (
        <>
            <Box textAlign={'center'} >
                <Center>
                    <Flex direction={'column'}>
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />


                    </Flex>
                </Center>
            </Box >
        </>
    )
}
export default ProductPage
