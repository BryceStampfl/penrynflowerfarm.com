import React from 'react'
import { Card, CardBody, Image, Stack, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { inter } from "@/pages/_app"
import { Color } from '@/Styles/BaseStyle'


type AppProps = {
    title: string;
    src: string;
    description: string;
}

export const HomeCard = ({ title, src, description }: AppProps) => {
    return (
        <Box >
            <Card variant={'unstyled'} bg={Color.background} >
                <CardBody my={'1rem'}  >
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
                            boxSize={['auto', '15rem']}
                            src={src}
                            alt='Green double couch with wooden legs'
                        />
                    </Link>
                    <Stack spacing='0' className={inter.className}>
                        <Text maxW={'15rem'}
                            //  backgroundColor={'#faffff'} 
                            fontSize={'1.5rem'} fontWeight={'normal'} color={'black'} >{title}</Text>
                        {/* <Text color='#DD4B52' fontSize='2xl'>$450</Text> */}
                    </Stack>
                </CardBody>
            </Card>
        </Box >

    )
}
