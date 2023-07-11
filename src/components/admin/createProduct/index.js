import { API, Storage } from 'aws-amplify';
import React, { useState } from 'react'
import { createProduct as createProductMutation } from "../../../graphql/mutations";

import { Box, Button, Input, Text, Image } from '@chakra-ui/react';


const CreateProduct = ({ fetchProducts }) => {

    const [img, setImg] = useState()
    const [imagePreview, setImagePreview] = useState()

    const [name, setName] = React.useState('')
    const handleNameChange = (event) => setName(event.target.value)

    const [price, setPrice] = React.useState('')
    const handlePriceChange = (event) => setPrice(event.target.value)

    const [desc, setDesc] = React.useState('')
    const handleDescChange = (event) => setDesc(event.target.value)


    async function createProduct(event) {
        event.preventDefault();

        // Upload the image first to get the key 
        let key = '';
        try {
            key = await Storage.put('products/' + img.name, img, {
                contentType: "image/png"
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        }

        // Upload the form data
        const data = {
            name: name,
            price: price,
            description: desc,
            imageKey: key.key,
        };
        await API.graphql({
            query: createProductMutation,
            variables: { input: data },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        fetchProducts();
        setImg('')
        setImagePreview('')
    }

    async function uploadImage(e) {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setImg(e.target.files[0])
    }

    return (
        <>
            <Box >
                <Input placeholder='Product Name' value={name} onChange={handleNameChange} fontSize={'1.25rem'} />
                <Input placeholder='Product Price' value={price} onChange={handlePriceChange} fontSize={'1.25rem'} />
                <Input placeholder='Product Description' value={desc} onChange={handleDescChange} fontSize={'1.25rem'} />

            </Box>

            <Text fontSize={'1.25rem'}>
                Image: <input type='file' accept="image/png, image/jpeg" alt='' onChange={uploadImage} />
            </Text>
            <Image boxSize={'40rem'} src={imagePreview} />
            <Button colorScheme='blue' onClick={createProduct}>Create Product</Button>
        </>
    )
}
export default CreateProduct