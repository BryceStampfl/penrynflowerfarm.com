import { Card, Stack, Image, CardBody, Flex, CardFooter, Button, Text } from "@chakra-ui/react"
import Link from "next/link"

const HorizontalCard = () => {

    const flowerName = 'FlowerNameTemp'
    return (
        <Card
            direction={['column', 'column', 'row']}
            overflow='hidden'
            variant='outline'
        >
            <Link href={`/flowers/${flowerName}`}>

                <Image
                    boxSize={'20rem'}
                    objectFit='cover'
                    maxW={{ base: '100%' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
            </Link>

            <Stack>
                <CardBody>
                    <Text fontSize={'3rem'}>The perfect bouquet</Text>

                    <Text py='2' fontSize={'2rem'}>
                        An absolutely beautiful flower bouquet with multiple flowers and plants
                    </Text>
                </CardBody>

                <CardFooter>
                    <Flex justifyContent={'space-between'} gap={'4rem'}>

                        <Button variant='solid' fontSize={'2rem'}
                            backgroundColor={'#ff9a8a'}
                        >
                            Buy Flower Bouquet
                        </Button>

                        <Button variant='solid' fontSize={'2rem'}
                            backgroundColor={'#ff9a8a'}
                        >
                            Add To Cart
                        </Button>
                    </Flex>

                </CardFooter>
            </Stack>
        </Card >
    )
}
export default HorizontalCard