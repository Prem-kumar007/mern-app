import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    const addTodo = () => {
        if (text.trim()) {
            axios.post('http://localhost:5000/api/v1/todos', { text, mobileNumber })
                .then(response => {
                    setTodos([...todos, response.data]);
                    setText('');
                    setMobileNumber('');
                })
                .catch(error => console.error('Error adding todo:', error));
        }
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/v1/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile number"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {todo.text} - {todo.mobileNumber || 'No mobile number'}
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;