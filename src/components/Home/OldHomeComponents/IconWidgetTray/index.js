import { SlHeart, SlHome, SlLike } from "react-icons/sl";
import { Box, Icon, Text, Flex, SimpleGrid } from "@chakra-ui/react";

const IconWidgetTray = () => {

    return (
        <Box alignContent={'center'} my='1rem' maxW={'80rem'}>
            <Flex justifyContent={'space-around'}>
                <IconWidget icon={SlHeart} heading="Farm fresh" body="All our flowers are grown right here on our farm" />
                <IconWidget icon={SlHome} heading="Home Grown" body="Everything is grown in our garden no corporations" />
                <IconWidget icon={SlLike} heading="Organic" body="No presticides used all organic" />
            </Flex>
        </Box >

    )


}
export default IconWidgetTray


const IconWidget = ({ icon, heading, body }) => {
    return (
        <Box  >
            <Flex gap={'1rem'} alignItems={'center'} >
                <Icon color={'#405654'} as={icon} boxSize={'3rem'} />
                <Box>
                    <Text overflowWrap={'true'} fontSize={'1.5rem'}>{heading}</Text>
                    <Text fontSize={'1rem'}>{body}</Text>

                </Box>
            </Flex>

        </Box>
    )
}


/*
    Local farmer 
    

*/