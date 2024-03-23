import { Box, Text, Center, Image } from '@chakra-ui/react'
import { RobotoFont } from "@/pages/_app"
import Link from 'next/link';

const ImageWithText = ({ url, text, link }) => {
    return (
        <Box position={'relative'} textAlign={'center'} className={RobotoFont.className} >
            <Image src={url}
                alt={"flowers"}
                objectFit={'cover'}
                height='100%'
                width='100%'
                boxSize={['auto', '27rem']}
            />

            <Link href={link}>
                <Box bgColor={'white'}
                    position={'absolute'}
                    width={'15rem'}
                    margin={'auto'}
                    left={0}
                    right={0}
                    top={'60%'}
                >
                    <Text
                        fontSize={'0.85rem'}
                        lineHeight='1'
                        letterSpacing='2px'
                        m='0.85rem'
                    >{text}</Text>
                </Box>
            </Link>
        </Box >
    )
}
export default ImageWithText