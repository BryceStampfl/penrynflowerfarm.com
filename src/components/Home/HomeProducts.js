import React from 'react';

import { Box, Flex, Button, Center } from '@chakra-ui/react'
import { HomeCard } from './HomeCard';
import Link from 'next/link';
import { DataContext } from '@/pages/_app';

const HomeProducts = () => {

    const data = React.useContext(DataContext)
    let concatData = [...data];
    concatData.length = 3;

    return (
        <>
            <Box textAlign={'center'} mb='1rem' color='#405654' borderX={['0px', '1px']}>
                <Flex dir='row' justifyContent={'center'} >
                    {concatData.map((product) => {
                        return <HomeCard key={product.name} title={product.name} src={product.imageUrl} description={product.description} />
                    })}

                </Flex >

                <Link href={'/flowers/page'}>
                    <Button mt='1rem'
                        variant={'outline'}

                        width={['auto', '13rem']}
                        height={['2.5rem']}
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
