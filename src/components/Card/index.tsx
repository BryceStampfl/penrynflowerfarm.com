import React from 'react'
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'

export const ProductCard = () => {
    return (
        <Card variant={'unstyled'}>
            <CardBody>
                <Image
                    width='100%'
                    boxSize={'30rem'}
                    src='https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='1' spacing='3'>
                    <Text fontSize={'2rem'} fontWeight={'500'}>Living room Sofa</Text>
                    <Text color='#DD4B52' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}


