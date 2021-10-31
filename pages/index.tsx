import { Box, Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import { getLayout } from '../layouts/MainLayout';

export default function Home() {
    return (
        <Box h='88vh'>
            <Heading marginTop='8' marginBottom='4'>
                Hello World!
            </Heading>
        </Box>
    );
}

Home.title = 'Home Page';
Home.getLayout = getLayout;