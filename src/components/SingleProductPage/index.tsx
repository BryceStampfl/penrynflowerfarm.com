import React from 'react'
import { useRouter } from 'next/router';


import { Box, Text, Center } from '@chakra-ui/react';
import HorizontalCard from '../Card/HorizontalCard';

const SingleProductPage = () => {
    // const { asPath } = useRouter()
    // const productName = asPath.substring(9, asPath.length - 5);
    const router = useRouter();


    const { title, src, description } = router.query;


    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                <Text fontSize={'4rem'} color='#405654'>{title}</Text>
                <Center>
                    <HorizontalCard title={title} src={src} description={description} />
                </Center>
            </Box >
        </>
    )
}
export default SingleProductPage