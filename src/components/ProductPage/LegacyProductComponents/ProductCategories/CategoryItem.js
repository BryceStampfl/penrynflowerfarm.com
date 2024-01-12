import React from 'react'
import { Text, Divider } from '@chakra-ui/react'

const CategoryItem = ({ title }) => {


    return (
        <>
            <Divider />
            <Text m='0.3rem' fontSize={'1rem'}>{title}</Text>
        </>
    )
}
export default CategoryItem