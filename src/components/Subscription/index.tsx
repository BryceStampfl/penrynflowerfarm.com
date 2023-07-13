import React from 'react'
import { Box, Image, Text, Flex, Center, Button, Divider } from "@chakra-ui/react"

const Subscription = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']} >

            <Box>
                <Center>
                    <Text fontSize={'2rem'} color='darkgreen'>{"Subscription"}</Text>

                </Center>

                <Flex direction={{ base: 'column', medium: 'row' }}>
                    <Box mr='2rem'>

                        <Image
                            objectFit={'contain'}
                            maxWidth='100%'
                            height='auto'
                            src={'/bouquet.jpg'} />
                    </Box>

                    <Box>
                        <Flex>
                            <Text fontSize={"2rem"}>
                                Experience the beauty of fresh flowers in your home every month with our stunning flower bouquet
                                subscription service! Imagine receiving a gorgeous bouquet of hand-selected, seasonal blooms delivered
                                straight to your doorstep on a regular basis. Whether you&apos;re looking to treat yourself or surprise a
                                loved one with a thoughtful and meaningful gift, our flower bouquet subscription is the perfect way to add some color and cheer to your life.
                            </Text>
                        </Flex>

                        <Button variant='solid' fontSize={'2rem'}
                            backgroundColor={'#ff9a8a'}
                        >
                            Buy Flower Bouquet
                        </Button>

                    </Box>
                </Flex>
            </Box>

        </Box >

    )

}
export default Subscription