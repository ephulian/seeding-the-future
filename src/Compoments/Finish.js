import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Finish() {
	let navigate = useNavigate();
	return (
		<div className='section-center'>
			<h1>Submited!</h1>
			<button onClick={() => navigate('/')}>Back to beginning</button>
		</div>
	);
}
