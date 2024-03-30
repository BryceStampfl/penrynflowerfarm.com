import Link from 'next/link'
import React from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'


const DrawerLink = ({ name, to, active, setActive }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box padding={'1rem'} onClick={onOpen}>

                <Text
                    color={to == active ? 'darkgreen' : 'black'}
                    textUnderlineOffset='0.5rem'
                    fontSize={'0.75rem'}
                    lineHeight='1'
                    letterSpacing='2px'
                    fontWeight={''}
                >CART</Text>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Cart</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerLink