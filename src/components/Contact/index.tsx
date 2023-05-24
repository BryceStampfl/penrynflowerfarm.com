import React from 'react';

import { Box, Flex, Divider, Heading, Image, Stack, Text, Button, Center } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons';


const Contact = () => {

    return (
        <>
            <Box>
                <Flex
                    direction='column'
                    alignItems="center"
                >
                    <Divider />

                    <Text fontSize={'4rem'} color={'#737373'}>Contact Us!</Text>
                    <Box fontSize={'2.25rem'} color={'#ff9a8a'}>
                        <Flex gap={5}>
                            <a href="https://www.instagram.com/penrynflowerfarm/"><Text>Instagram</Text> </a>
                            <a href="mailto:PenrynFlowerFarm@Gmail.com"><Text>Email</Text></a>
                            <a href="https://www.facebook.com/sandra.weidel.737"><Text>Facebook</Text></a>


                            {/* <SocialIcon url='https://www.instagram.com/penrynflowerfarm/' style={{ height: 25, width: 25 }} />
                    <SocialIcon url='mailto:PenrynFlowerFarm@Gmail.com' />
                    <SocialIcon url='https://www.facebook.com/sandra.weidel.737' /> */}
                        </Flex>
                    </Box>
                    <Text fontSize={'1.5rem'} color={'#737373'}>PenrynFlowerFarm@gmail.com</Text>

                </Flex>
            </Box>
            <Box mt='2rem'>
                <Center>

                    <Text fontSize={'1rem'}>@2019 Penryn Flower Farm | Brand & Website Designs By Bryce Stampfl</Text>
                </Center>

            </Box>
        </>
    )
}
export default Contact