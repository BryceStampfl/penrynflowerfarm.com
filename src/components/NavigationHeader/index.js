import React from 'react'
import { useRouter } from "next/router";
import { Box, Button, Center, Flex } from '@chakra-ui/react'
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
        setNavbarOpen(false)
    }

    const router = useRouter();

    return (
        <Box mx='auto' paddingTop={['auto']} >
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
                    pt={['2rem', '0rem', '1rem', '5rem', '8rem',]}
                >
                    <Center>
                        <Flex id='flex'
                            background={'white'}
                            borderRadius={50}
                            px={6}
                            justifyContent={'center'}
                            direction={['column', 'row']}
                        >
                            {navData.map((data) => (
                                <NavigationLink key={data.name} name={data.name} to={data.to} active={router.pathname} setActive={linkPressed} />
                            ))}
                        </Flex>
                    </Center>

                </Box>
            </Box>
            <Jumbotron />
        </Box >

    )

}
export default NavigationHeader



