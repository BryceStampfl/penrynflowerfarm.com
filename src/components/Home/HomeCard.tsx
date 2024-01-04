import React from 'react'
import { Card, CardBody, Image, Stack, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { inter } from "@/pages/_app"

type AppProps = {
    title: string;
    src: string;
    description: string;
}

export const HomeCard = ({ title, src, description }: AppProps) => {

    return (
        <Box boxShadow={'md'} my='1rem' mx='1rem'>
            <Card bg='#faffff' >
                <CardBody >
                    <Link href={{
                        pathname: `/flowers/${title}/page`,
                        query: {
                            title: title,
                            src: src,
                            description: description
                        }
                    }}>
                        <Image
                            objectFit='cover'
                            boxSize={['auto', '18rem']}
                            src={src}
                            alt='Green double couch with wooden legs'
                        />
                    </Link>
                    <Stack spacing='0' className={inter.className}>
                        <Text maxW={'15rem'} backgroundColor={'#faffff'} fontSize={'1.5rem'} fontWeight={'normal'} color={'gray'} >{title}</Text>
                        {/* <Text color='#DD4B52' fontSize='2xl'>$450</Text> */}
                    </Stack>
                </CardBody>
            </Card>
        </Box >

    )
}
