import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q1() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Question 1</h1>
			<button onClick={() => navigate('/q2')}>Next</button>
		</div>
	);
}
