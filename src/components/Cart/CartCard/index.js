import React from 'react';
import { Image, Flex, Box, Text } from '@chakra-ui/react'

const CartCard = ({ product }) => {

    console.log("Product is ", product);

    return (

        <Box>
            <Flex
                key={product.id || product.name}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    maxWidth='15rem' src={product.imageUrl} alt='img' />
                <Flex direction={'column'} padding={'1rem'}>
                    <Text> Name: {product.name}</Text>
                    <Text> Description: {product.description}</Text>
                    <Text> Price: {product.price}</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default CartCard;