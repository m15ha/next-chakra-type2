import { Box, Flex, Container } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box h='100%'>
            <Flex minHeight='100%' direction='column'>
                <Header />
                {/* <Box h='88vh' /> */}
                <Container maxW='container.xl'>{children}</Container>
                <Footer />
            </Flex>
        </Box>
    );
};

export const getLayout = (page: JSX.Element): JSX.Element => (
    <MainLayout>{page}</MainLayout>
);

export default MainLayout;
