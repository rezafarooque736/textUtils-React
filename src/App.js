import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = 'grey';
			showAlert('Dark mode has been enabled', 'success');
			document.title = 'TetxUtils - Dark Mode';
			// setInterval(() => {
			//   document.title = 'TetxUtil is amazing now';
			// }, 2000);
			// setInterval(() => {
			//   document.title = 'Download TetxUtils now';
			// }, 1000);
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode has been enabled', 'success');
			document.title = 'TetxUtils - Light Mode';
		}
	};

	return (
		<>
			<Router>
				<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About Us' />
				<Alert alert={alert} />
				<div className='container my-3'>
					<Routes>
						<Route exact path='/' element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below : ' mode={mode} />} />
						<Route exact path='/about' element={<About />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
