import React from 'react';

import { Box, Flex, Button, Center } from '@chakra-ui/react'
import { HomeCard } from './HomeCard';
import Link from 'next/link';
import { DataContext } from '@/pages/_app';

import { Color } from '@/Styles/BaseStyle'


const HomeProducts = () => {

    const data = React.useContext(DataContext)
    let concatData = [...data];
    concatData.length = 4;
    /* 
    green border color='#405654' borderX={['0px', '1px']}
    */
    return (
        <>
            <Box textAlign={'center'} mx='auto' >


                <Flex id='FLEXHOME' flexDirection={['column', 'row']} gap={['auto', '2rem']} justifyContent={'center'}>
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

                        color='white' backgroundColor={'#405654'}
                    > View More Flowers
                    </Button>
                </Link>


            </Box >
        </>
    )
}
export default HomeProducts
