import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
} from '@chakra-ui/react';

const Modal = () => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
        </>
    );
};

export default Modal;
