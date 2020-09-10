import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
	constructor() {
		super();

		this.state = {
			string: 'Hello World ponele',
		};
	}
	render() {
		return (
			<div className='App'>
				<CardList name='Yihua' children='yihua' />
				{/* <header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>{this.state.string}</p>
					<button onClick={() => this.setState({ string: 'Otra cosa' })}>Cambiar el texto</button>
				</header> */}
			</div>
		);
	}
}

export default App;
