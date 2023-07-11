import { API } from 'aws-amplify';
import React, { useState, useEffect } from 'react'
import { Heading, View, withAuthenticator } from '@aws-amplify/ui-react';
import { listProducts } from "../../graphql/queries";

// import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { RobotoFont } from "@/pages/_app"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



import {
    createProduct as createProductMutation,
    deleteProduct as deleteProductMutation,
} from "../../graphql/mutations";

import Listing from './listing/';
import CreateProduct from './createProduct';

const Admin = () => {
    const [index, setIndex] = React.useState(0)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        setProducts(productsFromAPI);
    }

    async function deleteProduct(id) {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        await API.graphql({
            query: deleteProductMutation,
            variables: { input: { id } },
            authMode: "AMAZON_COGNITO_USER_POOLS",

        });
    }

    return (
        <View
            fontSize='2rem'
            className={RobotoFont.className}
            margin='4em'
        >
            <Tabs
            // currentIndex={index}
            // onChange={(i) => setIndex(i)}
            // justifyContent="flex-start"

            >
                <TabList>
                    <Tab>Create Products</Tab>
                    <Tab>Listings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <CreateProduct fetchProducts={fetchProducts} />
                    </TabPanel>
                    <TabPanel>
                        <Heading level={2}>Current Products</Heading>
                        <View margin="3rem 0">
                            {products.map((product) => (
                                <Listing product={product} deleteProduct={deleteProduct} />

                            ))}
                        </View>                    </TabPanel>

                </TabPanels>

            </Tabs>
        </View>

    )
}
export default withAuthenticator(Admin);