import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionHeader from '../QuestionHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../../Stores/answers';

import '../../Styles/Question.css';
// import '../../Styles/home.css';

export default function Q6() {
	const [nextButton, setDisabled] = useState('disabled');
	const [error, setError] = useState('');

	const store = useSelector((state) => state);

	console.log(store);

	const enableButton = (e) => {
		if (nextButton === 'disabled') {
			setError('You must answer to continue!');
		} else {
			// addAnswer()
			navigate('/finish');
		}
	};

	const handleOption = (e) => {
		setDisabled('');
		dispatch(addAnswer({ id: 'Q6', value: e.target.innerHTML }));
	};

	let navigate = useNavigate();
	const dispatch = useDispatch();

	// const store = useSelector((state) => state);

	return (
		<div className='section-center question'>
			<div className='question-content'>
				<QuestionHeader count={5} />
				<div className='question-container'>
					<h4>
						Q6:{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos reprehenderit
							eaque maiores, ipsum obcaecati iste magni laboriosam nam quae?
						</span>
					</h4>
				</div>
				<div className='answer-container'>
					<div className='single-option'>
						<input type='radio' id='option_1' name='Q6' />
						<label onClick={(e) => handleOption(e)} id='option_1' htmlFor='option_1'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolore?
						</label>
					</div>
					<div className='single-option'>
						<input type='radio' id='option_2' name='Q6' />
						<label onClick={(e) => handleOption(e)} htmlFor='option_2'>
							Lorem ipsum dolor sit amet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</label>
					</div>
					<div className='single-option'>
						<input type='radio' id='option_3' name='Q6' />
						<label onClick={(e) => handleOption(e)} htmlFor='option_3'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dicta cupiditate?
						</label>
					</div>
					<div className='single-option'>
						<input type='radio' id='option_4' name='Q6' />
						<label onClick={(e) => handleOption(e)} htmlFor='option_4'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labor?
						</label>
					</div>
				</div>
				<div className='button-container'>
					{error}
					<button className={`${nextButton}`} onClick={() => enableButton()}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
