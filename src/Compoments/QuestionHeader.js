import React from 'react';
import '../Styles/QuestionHeader.css';

export default function QuestionHeader({ count }) {
	return (
		<header className='question-header'>
			<div className='logo-container'>
				<h3>logo</h3>
			</div>
			<h3 className='title'>Seeding the Future {count}/6</h3>
		</header>
	);
}
