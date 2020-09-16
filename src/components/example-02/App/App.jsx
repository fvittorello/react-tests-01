import React, { useState, useEffect } from 'react';
import './App.css';

//	Importing Components
import { Form } from 'components/example-02/Form/Form';
import { TodoList } from 'components/example-02/TodoList/TodoList';

//	Functions
const filterHandler = (status, todos, setFilteredTodos) => {
	switch (status) {
		case 'completed':
			setFilteredTodos(todos.filter((todo) => todo.completed === true));
			break;

		case 'uncompleted':
			setFilteredTodos(todos.filter((todo) => todo.completed === false));
			break;

		default:
			setFilteredTodos(todos);
			break;
	}
};

const saveTolocal = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

const App = () => {
	//States
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	//Use Effect only once
	useEffect(() => {
		getlocalTodos();
	}, []);

	//Use Effect
	useEffect(() => {
		filterHandler(status, todos, setFilteredTodos);
		saveTolocal(todos);
	}, [todos, status]);

	const getlocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
		}
	};

	return (
		<div className='App'>
			<header>
				<h1>Todo List</h1>
			</header>
			<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
			<TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
		</div>
	);
};

export default App;
