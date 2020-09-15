import React from 'react';
import './App.css';

const api_key = '6b2b22be';
const app_id = '96ca863a0bdf2e850114ba0293136806';

const example = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${api_key}`;

const App = () => {
	return (
		<div className='App'>
			<h1>Hello Example 03</h1>
		</div>
	);
};

export default App;
