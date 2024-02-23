import React from 'react'
import { Box, Image, Text, Flex, Center, Button, Divider } from "@chakra-ui/react"

const Subscription = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']} border={['0', '1px']} borderColor='lightgrey' >

            <Box >
                <Flex direction={{ base: 'column', medium: 'row' }}>
                    <Box maxWidth={'20rem'} mr='2rem'>

                        <Image
                            objectFit={'cover'}

                            maxWidth='100%'
                            height='auto'
                            src={'/bouquet.jpg'} />
                    </Box>

                    <Box>
                        <Center>
                            <Text mt='0.5rem' fontSize={'2rem'} color='darkgreen'>{"Gift Cards and Subscriptions"}</Text>

                        </Center>
                        <Flex flexDir={'column'}>

                            <Text mb='1rem' fontSize={"1.25rem"}> Looking to get a gift card for a loved one or a subscription for flowers delivered monthly?</Text>

                            <Text fontSize={"1.25rem"}>

                                Experience the beauty of fresh flowers in your home every month with our stunning flower bouquet
                                subscription service! Imagine receiving a gorgeous bouquet of hand-selected, seasonal blooms delivered
                                straight to your doorstep on a regular basis. Whether you&apos;re looking to treat yourself or surprise a
                                loved one with a thoughtful and meaningful gift, our flower bouquet subscription is the perfect way to add some color and cheer to your life.
                            </Text>
                        </Flex>

                        <Button width='50rem' variant='solid' fontSize={'1rem'}
                            backgroundColor={'#405654'}
                            color='white'
                        >
                            Email for purchasing!
                        </Button>

                    </Box>
                </Flex>
            </Box >

        </Box >

    )

}
export default Subscription