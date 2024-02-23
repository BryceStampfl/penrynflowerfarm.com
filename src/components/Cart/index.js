import React from 'react'
import { Box, Flex, Text, Image, Center } from '@chakra-ui/react'
import { CartContext } from '@/pages/_app'
import CartCard from './CartCard/index.js'

const Cart = () => {

    const { cart, setCart } = React.useContext(CartContext)
    console.log("Cart is", cart)

    return (
        <Box>
            <Flex flexDir={'column'} >
                <Box px={'1rem'} py={'1rem'} bg='#fafafa'>
                    <Box >
                        <Center>
                            <Flex direction={'column'}>
                                {cart.map((product) => {
                                    return (
                                        <CartCard key={product.id} product={product} />)
                                })}
                            </Flex>
                        </Center>
                    </Box >
                </Box>


            </Flex>
        </Box>
    )
}
export default Cart;