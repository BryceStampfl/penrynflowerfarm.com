import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'


const NavigationLink = ({ name, to, active, setActive }) => {


    const handleClick = () => {
        setActive(name)
    }

    return (
        <Box padding={'1rem'} onClick={handleClick}
        // borderRight={['0', '1px']} borderColor='lightgray'
        >
            <Link
                href={to}
            >
                <Text
                    color={to == active ? 'darkgreen' : 'black'}
                    textUnderlineOffset='0.5rem'
                    textDecoration={to == active ? 'underline' : 'none'}
                    fontSize={'0.8rem'}
                    lineHeight='1'
                    letterSpacing='2.5px'
                >{name}</Text>
            </Link>

        </Box>
    )
}
export default NavigationLink