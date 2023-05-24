
import { Box, Divider, Text } from "@chakra-ui/react"

import { PlayballFont } from "@/pages/_app"

export const WelcomeMessage = () => {

    // #DD4B52

    return (
        <Box maxWidth='1280px' textAlign={'center'} >
            <Text fontSize={'4.5rem'} color='#ff9a8a' className={PlayballFont.className}>
                Welcome to Penryn Flower Farm!
            </Text>
            <Text fontSize={'2rem'} textAlign={'center'} fontStyle={'italic'} color={'#737373'}>
                Located in the heart of the countryside, our farm boasts picturesque fields bursting with a diverse array of flowers. From cheerful sunflowers that radiate warmth to elegant roses that embody romance, our carefully nurtured blooms cater to every occasion and emotion.

            </Text>
            <Divider height={'2rem'} />
        </Box>
    )
}