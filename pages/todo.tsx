import { VStack, Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AddTodo from '../components/Todo/AddTodo';
import Search from '../components/Todo/Search';
import TodoList from '../components/Todo/TodoList';

function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(todos);
    }, []);

    function deleteTodo(id) {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
        console.log(newTodos);
    }

    function addTodo(newTodo) {
        setTodos([...todos, newTodo]);
    }

    function editTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        );
        setTodos(updatedItem);
    }

    return (
        <Container maxW='container.sm'>
            <VStack p={5}>
                <Search />
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
                <AddTodo addTodo={addTodo} />
            </VStack>
        </Container>
    );
}

export default Todo;
