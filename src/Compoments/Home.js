import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	let navigate = useNavigate();

	return (
		<div className='section-center'>
			<h1>Home</h1>
			<button onClick={() => navigate('/q1')}>Start!</button>
		</div>
	);
}
