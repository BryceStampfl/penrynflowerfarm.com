import React from 'react'
import { useRouter } from "next/router";
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { Squash } from 'hamburger-react'
import NavigationLink from './NavigationLink'


export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [active, setActive] = React.useState('Home')

    const navData = [
        { name: 'HOME', to: '/' },
        { name: 'FLOWERS', to: '/flowers/page' },
        { name: 'SUBSCRIPTION', to: '/subscription/page' },
        { name: 'GIFT CARDS', to: '/giftcards/page' },
        { name: 'ABOUT', to: '/about/page' },
        { name: 'CART', to: '/cart/page' }
    ];

    const linkPressed = (name) => {
        setActive(name)
        setNavbarOpen(false)
    }

    const router = useRouter();


    return (
        <Box mx='auto' border={['0', '1px']} borderColor='lightgrey' mb='1rem' maxW='80rem' >
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
                            backgroundColor='#fafafa'
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
        </Box >

    )
}
export default NavBar