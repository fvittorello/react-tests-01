import React, { useState, useEffect } from 'react';
import Slider from 'components/example-03/Slider';
import './App.css';

const api_key = '6b2b22be';
const app_id = '96ca863a0bdf2e850114ba0293136806';
let search = 'chicken';

const App = () => {
	// const getRecipes = async () => {
	// 	const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${api_key}`, {
	// 		method: 'GET',
	// 		headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
	// 	});
	// 	const data = await response.json();
	// 	console.log(data);
	// };

	// useEffect(() => {
	// 	getRecipes();
	// }, []);

	return (
		<div className='App'>
			<form className='search-form'>
				<input type='text' className='search-bar' />
				<button type='submit' className='search-button'>
					Search
				</button>
			</form>

			<Slider />
		</div>
	);
};

export default App;
