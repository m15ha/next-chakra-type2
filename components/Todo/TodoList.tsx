import {
    HStack,
    VStack,
    Text,
    Flex,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Divider,
    FormControl,    
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

function TodoList({ todos, deleteTodo, editTodo }) {
    const [todo, setTodo] = useState('');
    const [modalValue, setModalValue] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const initialRef = React.useRef();

    function onClose() {
        setIsOpen(false);
    }

    function handleEditClick(todo) {
        setIsOpen(true);
        setModalValue(todo);
        console.log(todo);
    }

    function handleDeleteClick(todo) {
        setIsOpen(true);
        setModalValue(todo);
        console.log(todo);
    }

    function handleEditInputChange(e) {
        setModalValue({ ...modalValue, text: e.target.value });
    }

    function handleEditSubmit(e) {
        e.preventDefault();

        editTodo(modalValue.id, modalValue);
        setModalValue('');
        setIsOpen(false);
    }

    return !todos.length ? (
        <Badge colorScheme='twitter' variant='solid' borderRadius='4'>
            No todos for Today
        </Badge>
    ) : (
        <VStack>
            {todos.map((todo) => (
                <HStack w='full' justify='space-between' key={todo.id}>
                    <Flex
                        p={6}
                        w='300px'
                        h='50px'
                        justifyContent='space-between'
                    >
                        <Text>{todo.text}</Text>

                        <Flex w='10px'>
                            <DeleteIcon
                                color='red.500'
                                mr='2'
                                cursor='pointer'
                                onClick={() => deleteTodo(todo.id)}
                            />
                            <EditIcon
                                cursor='pointer'
                                onClick={() => handleEditClick(todo)}
                            />
                        </Flex>

                        {/* modal for delete a todo */}
                        <Modal                          
                          finalFocusRef={inputRef}
                          isOpen={isOpen}
                          onClose={onSerialNumberModalClose}
                          serialNumber={serialNumber}
                          setSerialNumber={setSerialNumber}
                          currentItemSKU={currentItem?.sku}
                        /> 
                        deleteTodo={deleteTodo}/>

                        {/* modal for editing a todo */}
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            initialFocusRef={initialRef}
                            isCentered
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Edit Your Todo</ModalHeader>
                                <ModalCloseButton />
                                <FormControl>
                                    <ModalBody mx={6}>
                                        <Input
                                            value={modalValue.text}
                                            key={modalValue.id}
                                            variant='outline'
                                            type='text'
                                            ref={initialRef}
                                            placeholder='Update your todo...'
                                            onChange={handleEditInputChange}
                                        />
                                    </ModalBody>
                                    <ModalFooter my={6}>
                                        <Button
                                            colorScheme='blue'
                                            mr={3}
                                            onClick={onClose}
                                            variant='outline'
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            type='submit'
                                            colorScheme='blue'
                                            mr={6}
                                            onClick={handleEditSubmit}
                                        >
                                            Update
                                        </Button>
                                    </ModalFooter>
                                </FormControl>
                            </ModalContent>
                        </Modal>
                    </Flex>
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoList;
