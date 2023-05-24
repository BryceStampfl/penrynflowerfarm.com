import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { Center, Container, Flex, Image } from '@chakra-ui/react'

import { Squash } from 'hamburger-react'
import NavigationLink from './NavigationLink'
import { Jumbotron } from '../Jumbotron'

const NavigationHeader = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [active, setActive] = React.useState('Home')

    const navData = [
        { name: 'Home', to: '/' },
        { name: 'Flowers', to: '/flowers/page' },
        { name: 'Subscription', to: '/subscription/page' },
        { name: 'Gift Cards', to: '/giftcards/page' },
        { name: 'About', to: '/about/page' },
        { name: 'Cart', to: '/cart/page' }
    ];

    const linkPressed = (name) => {
        setActive(name)
    }

    return (
        <Box mx='auto' marginBlock={'auto'}>
            <Box id='navbar' >
                <Center>
                    <Button
                        display={['block', 'none']}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        backgroundColor='white'
                        borderColor='white'
                        padding='0px'
                    >
                        <Squash
                            color='black'
                            toggled={navbarOpen}
                            label="Show menu"
                            size={16}
                        />
                    </Button>
                </Center>

                <Box
                    display={[navbarOpen ? 'block' : 'none', 'block']}
                >
                    <Center>
                        <Flex id='flex'
                            background={'white'}
                            borderRadius={50}
                            px={6}
                            // border='1px red solid'

                            // display={'inline-flex'}
                            justifyContent={'center'}
                            direction={['column', 'row']}
                        >
                            {navData.map((data) => (
                                <NavigationLink name={data.name} to={data.to} active={active} setActive={linkPressed} />
                            ))}
                        </Flex>
                    </Center>

                </Box>
            </Box>
            <Jumbotron />
        </Box>

    )

}
export default NavigationHeader



