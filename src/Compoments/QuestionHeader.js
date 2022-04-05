import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/QuestionHeader.css';

export default function QuestionHeader({ count }) {
	let navigate = useNavigate();

	return (
		<header className='question-header'>
			<div onClick={() => navigate('/')} className='logo-container'>
				<h5>logo</h5>
			</div>
			<div className='title'>
				<h4>Seeding the Future </h4>
				<h4>{count}/6</h4>
			</div>
		</header>
	);
}
