import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Q6() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Question 6</h1>
			<button onClick={() => navigate('/finish')}>Next</button>
		</div>
	);
}
