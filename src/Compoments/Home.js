import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css';

export default function Home() {
	const [privacyNoticeState, setPrivacyNoticeState] = useState('closed');
	const [joinButton, setDisabled] = useState('disabled');
	const [error, setError] = useState('');

	let navigate = useNavigate();

	const togglePrivacyNotice = () => {
		privacyNoticeState === 'closed'
			? setPrivacyNoticeState('open')
			: setPrivacyNoticeState('closed');
	};

	const enableButton = (e) => {
		if (joinButton === 'disabled') {
			setDisabled('');
			setError('');
		} else {
			setDisabled('disabled');
		}
	};

	const startQuestionaire = (e) => {
		if (joinButton === 'disabled') {
			setError('Please accept the Privacy Notice to continue!');
		} else {
			navigate('/q1');
		}
	};

	return (
		<div className='section-center'>
			<div className='home'>
				<div className='card'>
					<div className='logo-container'>
						<h3>logo</h3>
					</div>
					<div className='title'>
						<h1>Seeding the Future</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, saepe sint minima
							esse quae odit?
						</p>
					</div>
				</div>
				<div className='button-container'>
					<div className='error'>{error}</div>
					<button className={`${joinButton}`} onClick={(e) => startQuestionaire(e)}>
						<h3>Join</h3>
					</button>
					<div className='privacy-notice'>
						<input
							onChange={(e) => enableButton(e)}
							type='checkbox'
							name='privacy-policy'
							id='privacy-policy'
						/>
						<label htmlFor='privacy-policy'>
							I accept the{' '}
							<a onClick={() => togglePrivacyNotice()} href='#'>
								Privacy Notice
							</a>
						</label>
					</div>
				</div>
			</div>
			<div className={`privacy-notice-container ${privacyNoticeState}`}>
				<p className='privacy-notice-full'>
					<br />
					<div className='privacy-notice__title-container'>
						<h3 className='privacy-notice__title'>Privacy Notice</h3>
						<div onClick={() => togglePrivacyNotice()} className='cross'></div>
					</div>
					<br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi, sint assumenda
					temporibus labore id fugiat fuga, exercitationem sequi optio molestias odio dolorum porro
					amet suscipit reiciendis tempore magnam corporis autem, qui repellendus laborum cupiditate
					soluta minima. Quasi minus accusantium doloremque voluptate nihil labore asperiores sint
					voluptates ullam autem unde dicta officia porro quam, nulla enim, aut animi! Quis
					doloribus autem numquam beatae aut. Tenetur! Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Pariatur modi, sint assumenda temporibus labore id fugiat fuga,
					exercitationem sequi optio molestias odio dolorum porro amet suscipit reiciendis tempore
					magnam corporis autem, qui repellendus laborum cupiditate soluta minima. Quasi minus
					accusantium doloremque voluptate nihil labore asperiores sint voluptates ullam autem unde
					dicta officia porro quam, nulla enim, aut animi! Quis doloribus autem numquam beatae aut.
					Tenetur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi, sint
					assumenda temporibus labore id fugiat fuga, exercitationem sequi optio molestias odio
					dolorum porro amet suscipit reiciendis tempore magnam corporis autem, qui repellendus
					laborum cupiditate soluta minima. Quasi minus accusantium doloremque voluptate nihil
					labore asperiores sint voluptates ullam autem unde dicta officia porro quam, nulla enim,
					aut animi! Quis doloribus autem numquam beatae aut. Tenetur! Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Pariatur modi, sint assumenda temporibus labore id fugiat
					fuga, exercitationem sequi optio molestias odio dolorum porro amet suscipit reiciendis
					tempore magnam corporis autem, qui repellendus laborum cupiditate soluta minima. Quasi
					minus accusantium doloremque voluptate nihil labore asperiores sint voluptates ullam autem
					unde dicta officia porro quam, nulla enim, aut animi! Quis doloribus autem numquam beatae
					aut. Tenetur!
				</p>
			</div>
		</div>
	);
}
