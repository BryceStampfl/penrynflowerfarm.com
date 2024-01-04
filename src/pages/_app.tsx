import React, { createContext } from 'react';

import { Caveat } from 'next/font/google';
import { Playball } from '@next/font/google'
import { Roboto } from 'next/font/google';

import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { listProducts } from '../graphql/queries'

import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Center } from '@chakra-ui/react';

import Contact from '@/components/Contact';
import { Logo } from '@/components/Logo'
import { NavBar } from '@/components/NavBar'
import IconWidgetTray from '@/components/IconWidgetTray';


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
    listProducts: any;
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

export const DataContext = createContext([]);

export const CartContext = React.createContext({
    cart: [{}],
    setCart: () => { },
});

const MyApp = ({ Component, pageProps }: AppProps) => {

    const [productData, setProductData] = React.useState([]);
    const [cart, setCart]: any = React.useState([]);

    const cartValue = { cart, setCart }

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
    }
    console.log(cart)

    return (
        <>
            <ChakraProvider>
                <main className={RobotoFont.className}>
                    <Box backgroundColor={'#fafafa'} >
                        <Logo />
                        <NavBar />
                        <DataContext.Provider value={productData}>
                            <CartContext.Provider value={cartValue}>
                                <Component {...pageProps} />
                            </CartContext.Provider>
                        </DataContext.Provider>
                        <Contact />
                    </Box>
                </main>
            </ChakraProvider>
        </>
    );
}

export default MyApp;

