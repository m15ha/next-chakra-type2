import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    );
}
export default MyApp;
