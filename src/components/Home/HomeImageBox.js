import React from 'react'
import { Box, Image } from '@chakra-ui/react'


const HomeImageBox = ({ imageName }) => {

    return (
        <Box pr={['0', '0.5rem']} mb={['0.5rem', '0']}>
            <Image
                objectFit={'contain'}
                maxWidth='100%'
                height='auto'
                alt='image'
                src={imageName} />
        </Box>
    )
}
export default HomeImageBox;