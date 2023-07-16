import React from 'react'

import { Box, Input } from '@chakra-ui/react'



const SearchBar = () => {
    const [placeHolder, setPlaceHolder] = React.useState('Search...')

    return (
        <Box
            boxShadow={'md'}
            p='1rem'
            bg='white'
        >

            <Box
                bg={'white'}

            >
                <Input
                    placeholder={placeHolder}
                    focusBorderColor='darkgreen'

                />
            </Box>
        </Box>
    )
}
export default SearchBar