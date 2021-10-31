import { HStack, Input, Button, useToast, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
    const toast = useToast();
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (value === '') {
            toast({
                title: 'Please enter the text.',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const todo = {
            id: nanoid(),
            text: value,
        };

        addTodo(todo);
        setValue('');
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const todo = {
                id: nanoid(),
                text: value,
            };
            addTodo(todo);
            setValue('');
        }
    };

    return (
        <HStack spacing={4} p={8}>
            <FormControl id='text'>
                <Input
                    type='text'
                    value={value}
                    placeholder='Something...'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={keyPressHandler}
                />
            </FormControl>
            <Button colorScheme='blue' variant='outline' onClick={handleSubmit}>
                Add
            </Button>
        </HStack>
    );
}

export default AddTodo;
