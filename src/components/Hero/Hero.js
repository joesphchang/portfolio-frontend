import React from 'react';
import BackgroundImage from '../../assets/hero-image.jpg';
import './Hero.css';

function Hero() {
	return (
		<div className='hero' id='home'>
			<img src={BackgroundImage} alt='background' className='hero-bg' />
			<div className='content'>
				<h1>Joey Chang</h1>
				<a
					href='https://docs.google.com/document/d/1EKujWp8x3uI6yy_Rl6EGJ_S7iPK-4S5UodDy6vIcLYM/edit?usp=sharing'
					target='_blank'
					rel='noreferrer'>
					Resume
				</a>
			</div>
		</div>
	);
}

export default Hero;
