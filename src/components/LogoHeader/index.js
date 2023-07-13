import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';


export const LogoHeader = () => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;

        await Promise.all(
            productsFromAPI.map(async (product) => {
                const url = await Storage.get(product.imageKey);
                return product.imageUrl = url;
            })
        );
        setProductData(productsFromAPI);
        console.log(productsFromAPI)
    }

    return (
        <Box id='logoContainer' pt='1rem' >
            <Center>
                <Image
                    width={['13rem', '20rem']}
                    alt='logo'

                    src='logo2.png'
                />
            </Center>
        </Box>
    )
}