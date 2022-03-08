import React from 'react';
import backgroundImage from '../../assets/hero-image.png';
import './Hero.css';

function Hero() {
	return (
		<div className='hero' id='home'>
			<div>
				<img src={backgroundImage} alt='background' />
			</div>
			<div className='content'>
				<h1>Joey Chang</h1>
			</div>
		</div>
	);
}

export default Hero;
