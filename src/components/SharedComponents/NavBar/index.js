import React from 'react'
import { useRouter } from "next/router";
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { Squash } from 'hamburger-react'
import NavigationLink from './NavigationLink'
import DrawerLink from './DrawerLink'


export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [active, setActive] = React.useState('Home')

    const navData = [
        { name: 'HOME', to: '/' },
        { name: 'FLOWERS', to: '/flowers/page' },
        { name: 'GIFT CARDS & SUBSCRIPTIONS', to: '/subscription/page' },
        // { name: 'GIFT CARDS', to: '/giftcards/page' },
        // { name: 'PURCHASE', to: '/cart/page' },

        { name: 'ABOUT', to: '/about/page' },
    ];

    const linkPressed = (name) => {
        setActive(name)
        setNavbarOpen(false)
    }

    const router = useRouter();


    return (
        <Box
            mx={[0, 'auto']}
            mb='2rem'
            maxW='80rem'
        >
            <Box id='navbar' >
                <Center>
                    <Button
                        display={['block', 'none']}
                        onClick={() => setNavbarOpen(!navbarOpen)}
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
                            justifyContent={['flex-start', 'center']}
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