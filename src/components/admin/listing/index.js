import React from 'react'
import { API, Storage } from 'aws-amplify';
// import { Button, Flex, Image, Text, Divider, View, } from '@aws-amplify/ui-react';

import { Box, Button, Flex, Text, Image, Divider } from '@chakra-ui/react';


const Listing = ({ product, deleteProduct }) => {
    const [imageUrl, setImageUrl] = React.useState('')

    React.useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get(product.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])



    return (
        <Box>
            <Flex
            // key={product.id || product.name}
            // direction="row"
            // justifyContent="center"
            // alignItems="center"
            >
                <Image
                    maxWidth='20rem' src={imageUrl} />
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