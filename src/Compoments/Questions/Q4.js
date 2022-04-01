import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q4() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Question 4</h1>
			<button onClick={() => navigate('/q5')}>Next</button>
		</div>
	);
}
