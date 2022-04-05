import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionHeader from '../QuestionHeader';
import '../../Styles/Question.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../../Stores/answers';

export default function Q3() {
	const [nextButton, setDisabled] = useState('disabled');
	const [error, setError] = useState('Answer here..');

	const enableButton = (e) => {
		if (nextButton === 'disabled') {
			setError('You must answer to continue!');
		} else {
			navigate('/q4');
		}
	};

	const handleAnswer = (e) => {
		if (e.target.value.length > 0) {
			setDisabled('');
			dispatch(addAnswer({ id: 'Q3', value: e.target.value }));
		} else if (e.target.value.length <= 0) {
			setDisabled('disabled');
			dispatch(addAnswer({ id: 'Q3', value: 'empty' }));
		}
	};

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const store = useSelector((state) => state);
	console.log(store);

	return (
		<div className='section-center question'>
			<div className='question-content'>
				<QuestionHeader count={3} />
				<div className='question-container'>
					<h4>
						Q3:{' '}
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos reprehenderit
							eaque maiores, ipsum obcaecati iste magni laboriosam nam quae?
						</span>
					</h4>
				</div>
				<div className='answer-container'>
					<input
						className='answer'
						onChange={(e) => handleAnswer(e)}
						id='answer'
						placeholder={`${error}`}
						type='text'
						name='answer_1'
					/>
				</div>
				<div className='button-container'>
					<button className={`${nextButton}`} onClick={() => enableButton()}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
