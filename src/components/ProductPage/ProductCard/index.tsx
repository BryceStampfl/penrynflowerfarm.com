import React from 'react'
import { Card, CardBody, Image, Stack, Text, Box, Button, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { inter } from "@/pages/_app"
import { CartContext } from '@/pages/_app';

type AppProps = {
    title: string;
    src: string;
    description: string;
}

export const ProductCard = ({ title, src, description }: AppProps) => {



    const toast = useToast()
    const cart = React.useContext(CartContext)


    const buttonPressed = () => {
        toast({
            title: 'Added to cart.',
            description: "We've added the selection to your cart.",
            status: 'success',
            position: 'top',
            duration: 5000,
            isClosable: true,
        })


    }

    return (
        <Box mb='2rem' >
            <Card variant={'unstyled'} >
                <CardBody >
                    <Link href={{
                        pathname: `/flowers/${title}/page`,
                        query: {
                            title: title,
                            src: src,
                            description: description
                        }
                    }}>
                        <Image
                            boxSize={['auto', '15rem']}
                            src={src}
                            alt='Green double couch with wooden legs'
                        />
                    </Link>
                    <Stack spacing='0' className={inter.className}>
                        <Text fontSize={'1.5rem'} fontWeight={'normal'} color={'gray'} >{title}</Text>
                        <Text color='#63666A'>Category</Text>
                        <Text color='darkgreen' fontSize='2xl'>$450</Text>
                        <Button
                            onClick={buttonPressed}
                            color='white'
                            backgroundColor={'#405654'}
                        >Add to Cart</Button>
                    </Stack>
                </CardBody>
            </Card>
        </Box>

    )
}
export default ProductCard
