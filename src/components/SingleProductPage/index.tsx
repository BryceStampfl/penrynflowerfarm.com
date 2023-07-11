import React from 'react'
import { useRouter } from 'next/router';

import { Box, Text, Center } from '@chakra-ui/react';
import HorizontalCard from '../Card/HorizontalCard';

const SingleProductPage = () => {
    const { asPath } = useRouter()
    const productName = asPath.substring(9, asPath.length - 5);

    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                <Text fontSize={'4rem'} color='#ff9a8a'>{productName}</Text>
                <Center>
                    <HorizontalCard />
                </Center>
            </Box >
        </>
    )
}
export default SingleProductPage