import { Card, Stack, Image, CardBody, Flex, CardFooter, Button, Text, Box } from "@chakra-ui/react"
import Link from "next/link"
import { Color } from '@/Styles/BaseStyle'

const HorizontalCard = ({ title, src, description }) => {

    const flowerName = ''
    return (
        <Card

            borderColor={'black'}
            backgroundColor={Color.background}
            // maxW={'80rem'}

            width={['auto', 'auto', 'auto', 'auto', '80rem']}
            direction={['column', 'column', 'column', 'row']}
            overflow='hidden'
            variant='filled'
            mb='1rem'
        >
            <Link href={`/flowers/${flowerName}/page`}>

                <Box maxW={'40rem'}>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%' }}
                        src={src}
                        alt={title}
                    />
                </Box>
            </Link>

            <Stack>
                <CardBody>

                    <Text fontSize={['auto', '2rem']} fontStyle={'italic'}>{title}</Text>
                    <Text py='2' fontSize={['auto', '1.25rem']}>
                        {description}
                    </Text>
                    <Text fontSize={['auto', '1.25rem']}> To place an order please contact me at https://penrynflowerfarm@gmail.com</Text>
                </CardBody>

                <CardFooter>
                    <Flex justifyContent={'space-between'} gap={'2rem'}>
                        <Button variant='solid' fontSize={'1rem'} color={'white'} backgroundColor={'#405654'}> Buy Flower Bouquet </Button>
                        <Button variant='solid' fontSize={'1rem'} backgroundColor={'#405654'} color={'white'}> Add To Cart </Button>
                    </Flex>

                </CardFooter>
            </Stack>
        </Card >
    )
}
export default HorizontalCard