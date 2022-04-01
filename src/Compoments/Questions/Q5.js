import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q5() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Question 5</h1>
			<button onClick={() => navigate('/q6')}>Next</button>
		</div>
	);
}
