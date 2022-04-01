import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q2() {
	let navigate = useNavigate();
	return (
		<div className='section-center'>
			<h1>Question 2</h1>
			<button onClick={() => navigate('/q3')}>Next</button>
		</div>
	);
}
