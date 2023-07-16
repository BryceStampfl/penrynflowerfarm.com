import React from 'react';

import { Box, Flex, Divider, Heading, Image, Stack, Text, Button, Center } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons';


const Contact = () => {

    return (
        <Box mx='auto' border={['0', '1px']} borderColor='lightgrey' mb='1rem' mt='1rem' maxW='80rem' >
            <Box >
                <Flex
                    direction='column'
                    alignItems="center"
                >
                    <Divider />

                    {/* <Text
                        fontSize={'1.5rem'}
                        letterSpacing='3px'
                        color={'#013220'}
                    >CONTACT US!</Text> */}
                    <Box fontSize={'1rem'} color={'#013220'} letterSpacing='.5px' >
                        <Flex gap={5}>
                            <a href="https://www.instagram.com/penrynflowerfarm/"><Text>INSTAGRAM</Text> </a>
                            <a href="mailto:PenrynFlowerFarm@Gmail.com"><Text>EMAIL</Text></a>
                            <a href="https://www.facebook.com/sandra.weidel.737"><Text>FACEBOOK</Text></a>


                            {/* <SocialIcon url='https://www.instagram.com/penrynflowerfarm/' style={{ height: 25, width: 25 }} />
                    <SocialIcon url='mailto:PenrynFlowerFarm@Gmail.com' />
                    <SocialIcon url='https://www.facebook.com/sandra.weidel.737' /> */}
                        </Flex>
                    </Box>
                    {/* <Text fontSize={'1.5rem'} color={'#737373'}>PenrynFlowerFarm@gmail.com</Text> */}

                </Flex>
            </Box>
            <Box>
                <Center>

                    <Text color={'#63666A'} fontSize={'0.75rem'}>@2019 Penryn Flower Farm | Brand & Website Designs By Bryce Stampfl</Text>
                </Center>

            </Box>
        </Box>
    )
}
export default Contact

