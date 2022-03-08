import React from 'react';
import BackgroundVideo from '../../assets/red-drapes.mp4';
import './Hero.css';

function Hero() {
	return (
		<div className='hero' id='home'>
			<video autoPlay loop muted className='hero-bg'>
				<source src={BackgroundVideo} type='video/mp4'></source>
			</video>
			<div className='content'>
				<h1>Joey Chang</h1>
			</div>
		</div>
	);
}

export default Hero;
