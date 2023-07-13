import React from 'react';

import { Box, SimpleGrid, Text, Center, Divider, Flex } from '@chakra-ui/react'
import HorizontalCard from '../Card/HorizontalCard'
import { DataContext } from '@/pages/_app';


const ProductPage = () => {

    const data = React.useContext(DataContext)


    return (
        <>
            <Box textAlign={'center'} >
                <Center>
                    <Flex direction={'column'}>
                        {data.map((product) => {
                            return <HorizontalCard key={product.id} title={product.name} src={product.imageUrl} description={product.description} />
                        })}

                    </Flex>
                </Center>
            </Box >
        </>
    )
}
export default ProductPage
