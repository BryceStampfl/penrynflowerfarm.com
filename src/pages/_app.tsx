import { Caveat } from 'next/font/google';
import { Playball } from '@next/font/google'
import { Roboto } from 'next/font/google';


import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);



import NavigationHeader from '@/components/NavigationHeader';
import Contact from '@/components/Contact';
import { LogoHeader } from '@/components/LogoHeader';


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