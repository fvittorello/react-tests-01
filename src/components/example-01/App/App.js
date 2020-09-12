import React, { useState, useEffect } from 'react';
import { SearchBox } from '../example-01/search-box';
import { CardList } from '../example-01/card-list';

import './App.css';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	function getMonsters() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters({ users }))
			.catch((err) => console.log(err));
	}

	const handleInput = (e) => {
		setSearchField(e.target.value);
	};

	useEffect(() => {
		getMonsters();
	});

	return (
		<>
			<SearchBox onChange={handleInput} searchField={searchField} placeholder='Buscar' />
			<CardList monsters={monsters} />
		</>
	);
};

export default App;
