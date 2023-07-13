import React from 'react'
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { inter } from "@/pages/_app"

type AppProps = {
    title: string;
}

export const HomeCard = ({ title }: AppProps) => {
    const flowerName = 'FlowerNameHolder'

    return (
        <Card variant={'unstyled'}>
            <CardBody >
                <Link href={`/flowers/${flowerName}/page`}>
                    <Image
                        boxSize={['auto', '15rem']}
                        src='https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                        alt='Green double couch with wooden legs'
                    />
                </Link>
                <Stack spacing='0' className={inter.className}>
                    <Text backgroundColor={'#fafafa'} fontSize={'1.5rem'} fontWeight={'normal'} color={'gray'} >{title}</Text>
                    {/* <Text color='#DD4B52' fontSize='2xl'>$450</Text> */}
                </Stack>
            </CardBody>
        </Card>
    )
}
