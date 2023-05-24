import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'


const NavigationLink = ({ name, to, active, setActive }) => {


    const handleClick = () => {
        setActive(name)
    }

    return (
        <Box padding={'1rem'} onClick={handleClick}>
            <Link
                href={to}
            >
                <Text
                    // #f6c492 peach
                    color={to == active ? '#ff9a8a' : '#737373'}
                    fontSize={'1.75rem'}
                    fontWeight={'thin'}
                >{name}</Text>
            </Link>

        </Box>
    )
}
export default NavigationLink