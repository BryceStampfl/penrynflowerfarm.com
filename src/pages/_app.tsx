import { Caveat } from 'next/font/google';
import { Playball } from '@next/font/google'
import { Roboto } from 'next/font/google';


import type { AppProps } from 'next/app';
import { ChakraProvider, Center } from '@chakra-ui/react';



import NavigationHeader from '@/components/NavigationHeader';
import Contact from '@/components/Contact';
import { LogoHeader } from '@/components/LogoHeader';


// If loading a variable font, you don't need to specify the font weight
const inter = Caveat({
    subsets: ['latin']
});

export const PlayballFont = Playball({
    subsets: ['latin'],
    weight: ['400'],
});

export const RobotoFont = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <main className={inter.className}>
                <LogoHeader />
                <NavigationHeader />
                <Component {...pageProps} />
                <Contact />

            </main>
        </ChakraProvider>
    );
}

export default MyApp;