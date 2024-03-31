import React from 'react'
import { Card, CardBody, Image, Stack, Text, Box, Button, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { inter, CartContext } from "@/pages/_app"
import { Color } from '@/Styles/BaseStyle'

export const ProductCard = ({ product }) => {

    const { cart, setCart } = React.useContext(CartContext);
    const toast = useToast()

    const buttonPressed = () => {
        toast({
            title: 'Added to cart.',
            description: "We've added the selection to your cart.",
            status: 'success',
            position: 'top',
            duration: 5000,
            isClosable: true,
        })
        setCart(cart => [product, ...cart]);

    }

    return (

        <Box mx='auto'>
            <Card bg='#faffff' variant={'unstyled'} >
                <CardBody backgroundColor={Color.background} >
                    <Link href={{
                        pathname: `/flowers/${product.name}/page`,
                        query: {
                            title: product.name,
                            src: product.imageUrl,
                            description: product.description
                        }
                    }}>
                        <Image
                            objectFit={'cover'}
                            boxSize={['10rem', '20rem']}
                            src={product.imageUrl}
                            alt='Picture of Flower'
                        />
                    </Link>
                    <Stack spacing='0' className={inter.className} >
                        <Text
                            textAlign={'center'}
                            fontSize={'1.5rem'}
                            fontWeight={'normal'}
                            color={'black'}
                        >{product.name} </Text>
                        {/* <Text color='darkgreen' fontSize='2xl'>$450</Text> */}
                        {/* <Button
                            onClick={buttonPressed}
                            color='white'
                            backgroundColor={'#405654'}
                        >Add to Cart</Button> */}
                    </Stack>
                </CardBody>
            </Card>
        </Box >

    )
}
export default ProductCard
