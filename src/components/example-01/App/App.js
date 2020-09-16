import React, { useState, useEffect } from 'react';
import { SearchBox } from 'components/example-01/SearchBox/SearchBox';
import { CardList } from 'components/example-01/CardList/CardList';

import './App.css';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	function getMonsters() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users))
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
