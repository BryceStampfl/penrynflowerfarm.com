
import { Box, Divider, Text } from "@chakra-ui/react"

import { RobotoFont } from "@/pages/_app"

export const WelcomeMessage = () => {

    // #DD4B52

    return (
        <Box maxWidth='80rem' textAlign={'center'} >
            <Text fontSize={'4.5rem'} color='#ff9a8a'
            // className={PlayballFont.className}
            >

                Welcome to Penryn Flower Farm!
            </Text>
            <Text className={RobotoFont.className} fontSize={'1.5rem'} textAlign={'center'} fontStyle={'italic'} color={'#737373'}>
                Located in the heart of the countryside, our farm boasts picturesque fields bursting with a diverse array of flowers. From cheerful sunflowers that radiate warmth to elegant roses that embody romance, our carefully nurtured blooms cater to every occasion and emotion.

            </Text>
            <Divider height={'2rem'} />
        </Box>
    )
}