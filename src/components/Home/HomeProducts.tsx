import React from 'react';

import { Box, SimpleGrid, Text, Button, Center, Divider } from '@chakra-ui/react'
import { HomeCard } from '../Home/HomeCard';
import Link from 'next/link';

const HomeProducts = () => {
    return (
        <>
            <Box textAlign={'center'} mb='1rem' >
                {/* <Text fontSize={'4rem'} color='#ff9a8a'>
                    Flower Bouquets                </Text> */}

                <Center>
                    <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />


                    </SimpleGrid >
                </Center>

                <Link href={'/flowers/page'}>
                    <Button mt='1rem'
                        variant={'outline'}

                        width={['auto', '13rem']}
                        height={['auto', '2.5rem']}
                        fontSize={'1rem'}

                        color='white' backgroundColor='#405654'
                    >View More Flowers
                    </Button>
                </Link>
            </Box >
        </>
    )
}
export default HomeProducts
