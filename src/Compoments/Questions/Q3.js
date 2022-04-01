import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q3() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Question 3</h1>
			<button onClick={() => navigate('/q4')}>Next</button>
		</div>
	);
}
