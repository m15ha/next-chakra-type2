import { Input, Box } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
    return (
        <Box py={4} w='50%'>
          <Input placeholder="Search" />            
        </Box>
    );
};

export default Search;