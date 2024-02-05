import { Card, Stack, Image, CardBody, Flex, CardFooter, Button, Text, Center } from "@chakra-ui/react"
import Link from "next/link"


const HorizontalCard = ({ title, src, description }) => {

    const flowerName = 'FlowerNameTemp'
    return (
        <Card
            border={'1px'}
            borderColor={'grey'}
            backgroundColor={'#fafafa'}
            // maxW={'80rem'}

            width={['auto', 'auto', 'auto', 'auto', '80rem']}
            direction={['column', 'column', 'column', 'row']}
            overflow='hidden'
            variant='outline'
            mb='2rem'
        >
            <Link href={`/flowers/${flowerName}/page`}>

                <Image
                    boxSize={['auto', '20rem']}
                    objectFit='cover'
                    maxW={{ base: '100%' }}
                    src={src}
                    alt='Caffe Latte'
                />
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