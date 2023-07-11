import { Card, Stack, Image, CardBody, Flex, CardFooter, Button, Text, Center } from "@chakra-ui/react"
import Link from "next/link"

const HorizontalCard = () => {

    const flowerName = 'FlowerNameTemp'
    return (
        <Card
            border={'1px'}
            borderColor={'grey'}
            backgroundColor={'#fafafa'}
            maxW={'80rem'}

            width={['auto', 'auto', 'auto', 'auto', '80rem']}
            direction={['column', 'column', 'column', 'row']}
            overflow='hidden'
            variant='outline'
        >
            <Link href={`/flowers/${flowerName}/page`}>

                <Image
                    boxSize={['auto', '20rem']}
                    objectFit='cover'
                    maxW={{ base: '100%' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
            </Link>

            <Stack>
                <CardBody>

                    <Text fontSize={['auto', '2rem']} fontStyle={'italic'}>Example Name</Text>
                    <Text py='2' fontSize={['auto', '1.25rem']}>
                        An absolutely beautiful flower bouquet with multiple flowers and plants
                    </Text>
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