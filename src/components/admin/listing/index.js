import React, { useState, useEffect } from 'react'
import { API, Storage } from 'aws-amplify';
// import { Button, Flex, Image, Text, Divider, View, } from '@aws-amplify/ui-react';

import { Box, Button, Flex, Text, Image, Divider } from '@chakra-ui/react';


const Listing = ({ product, deleteProduct }) => {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get(product.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [imageUrl, product.imageKey])



    return (
        <Box>
            <Flex
            // key={product.id || product.name}
            // direction="row"
            // justifyContent="center"
            // alignItems="center"
            >
                <Image
                    maxWidth='20rem' src={imageUrl} alt='img' />
                <Flex direction={'column'} padding={'1rem'}>
                    <Text> Name: {product.name}</Text>
                    <Text> Description: {product.description}</Text>
                    <Text> Price: {product.price}</Text>
                </Flex>
                <Button variation="link" onClick={() => deleteProduct(product.id)}>
                    Delete product
                </Button>


            </Flex>

            <Divider orientation="horizontal" />
        </Box>

    )
}

export default Listing;