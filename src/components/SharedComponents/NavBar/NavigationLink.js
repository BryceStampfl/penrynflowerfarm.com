import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'


const NavigationLink = ({ name, to, active, setActive }) => {


    const handleClick = () => {
        setActive(name)
    }

    return (
        <Box padding={'1rem'} onClick={handleClick} borderRight={['0', '1px']} borderColor='lightgray'>
            <Link
                href={to}
            >
                <Text
                    // #f6c492 peach
                    color={to == active ? 'darkgreen' : '#63666A'}
                    textUnderlineOffset='0.5rem'

                    textDecoration={to == active ? 'underline' : 'none'}
                    fontSize={'0.75rem'}
                    lineHeight='1'
                    letterSpacing='2px'
                    fontWeight={''}
                >{name}</Text>
            </Link>

        </Box>
    )
}
export default NavigationLink