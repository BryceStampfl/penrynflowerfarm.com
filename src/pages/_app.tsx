import React from 'react';

import { Caveat } from 'next/font/google';
import { Playball } from '@next/font/google'
import { Roboto } from 'next/font/google';

import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { listProducts } from '../graphql/queries'

import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';

import Contact from '@/components/Contact';
import { Logo } from '@/components/Logo'
import { Jumbotron } from '@/components/Jumbotron';
import { NavBar } from '@/components/NavBar'

Amplify.configure(awsconfig);

export const inter = Caveat({
    subsets: ['latin']
});

export const PlayballFont = Playball({
    subsets: ['latin'],
    weight: ['400'],
});

export const RobotoFont = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
});

export interface GraphQLResult {
    data?: {
        listProducts: {
            data: object
        }
    }
    errors?: [object];
    extensions?: {
        [key: string]: any;
    };
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        // const apiData = await API.graphql({ query: listProducts });
        const apiData = await API.graphql(graphqlOperation(listProducts)) as {
            data: GraphQLResult

        };

        const productsFromAPI = apiData.data.listProducts.items;
        await Promise.all(
            productsFromAPI.map(async (product: any) => {
                const url = await Storage.get(product.imageKey);
                return product.imageUrl = url;
            })
        );
        setProductData(productsFromAPI);
        console.log(productsFromAPI)
    }

    return (
        <>
            <ChakraProvider>
                <main className={RobotoFont.className}>
                    <Box backgroundColor={'#fafafa'} >
                        <Logo />
                        <NavBar />
                        <Component {...pageProps} />
                        <Contact />
                    </Box>
                </main>
            </ChakraProvider>
        </>
    );
}

export default MyApp;