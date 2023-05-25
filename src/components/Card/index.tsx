import React from 'react'
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const ProductCard = () => {

    const flowerName = 'FlowerNameHolder'
    return (
        <Card variant={'unstyled'}>
            <CardBody>
                <Link href={`/flowers/${flowerName}`}>
                    <Image
                        width='100%'
                        boxSize={'20rem'}
                        src='https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Link>

                <Stack mt='0' spacing='0' textAlign={'left'}>
                    <Text fontSize={'1.5rem'} fontWeight={'500'}>Living room Sofa</Text>
                    <Text color='#DD4B52' fontSize='1.75rem'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}


