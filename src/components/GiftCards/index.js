import React from 'react'
import { Box, Image, Text, Flex, Center, Button } from "@chakra-ui/react"


const GiftCards = () => {

    return (
        <Box maxWidth={['80rem']} mx={['0', 'auto']} border={['0', '1px']} borderColor='lightgrey'>
            <Box >
                <Flex direction={{ base: 'column', medium: 'row' }}>
                    <Box mr='2rem'>
                        <Image
                            objectFit={'cover'}
                            maxWidth='100%'
                            width='200rem'
                            height='auto'
                            alt='giftcard'
                            src={'/giftcard.jpg'} />
                    </Box>

                    <Box>
                        <Center>
                            <Text fontSize={'2rem'} color='#405654'>{"GiftCards"}</Text>

                        </Center>
                        <Flex>
                            <Text fontSize={"1.5rem"}>
                                Experience the beauty of fresh flowers in your home every month with our stunning flower
                                bouquet subscription service! Imagine receiving a gorgeous bouquet of hand-selected, seasonal
                                blooms delivered straight to your doorstep on a regular basis. Whether you&apos;re looking to treat yourself or surprise a loved one with a thoughtful and meaningful gift, our flower bouquet subscription is the perfect way to add some color and cheer to your life.
                            </Text>
                        </Flex>

                        <Button
                            variant='solid'
                            fontSize={'2rem'}
                            backgroundColor={'#405654'} color={'white'}
                            mb='1rem'
                        >
                            Purchase Gift Card
                        </Button>

                    </Box>
                </Flex>
            </Box>

        </Box >
    )
}
export default GiftCards;