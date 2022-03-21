import React, { useState } from 'react';

export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert('Converted to UpperCase', 'success');
	};
	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert('Converted to LowerCase', 'success');
	};
	const handleClearClick = () => {
		let newText = '';
		setText(newText);
		props.showAlert('Text Cleared', 'success');
	};
	const handleCopyClick = () => {
		let text1 = document.getElementById('myBox');
		text1.select();
		navigator.clipboard.writeText(text1.value);
		props.showAlert('Copied to Clipboard!', 'success');
	};
	const removeExtraSpace = () => {
		let newtext = text.split(/[ ]+/);
		setText(newtext.join(' '));
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const [text, setText] = useState('Enter text here');
	return (
		<>
			<div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h1 className='mt-5'> {props.heading} </h1>
				<div className='mb-3'>
					<textarea
						value={text}
						style={{
							backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
							color: props.mode === 'dark' ? 'white' : 'black',
						}}
						onChange={handleOnChange}
						className='form-control'
						id='myBox'
						rows='8'></textarea>
					<button className='btn btn-primary mt-3 me-2' onClick={handleUpClick}>
						Convert to Uppercase
					</button>
					<button className='btn btn-primary mt-3 me-2' onClick={handleLowClick}>
						Convert to Lowercase
					</button>
					<button className='btn btn-primary mt-3 me-2' onClick={handleClearClick}>
						Clear Text
					</button>
					<button className='btn btn-primary mt-3 me-2' onClick={handleCopyClick}>
						Copy Text
					</button>
					<button className='btn btn-primary mt-3 me-2' onClick={removeExtraSpace}>
						Remove Extra Space
					</button>
				</div>
			</div>
			<div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h2> Your Text Summary </h2>
				<p>
					Word Count : <strong>{text.split(' ').length}</strong> words and <strong>{text.length}</strong> characters
				</p>
				<p>
					Reading Minutes : <strong>{0.005 * text.split(' ').length.toPrecision(2)}</strong> minutes
				</p>
				<h2> Preview </h2>
				<p> {text.length > 0 ? text : 'Enter Something in the textbox above to prevew it here!'} </p>
			</div>
		</>
	);
}