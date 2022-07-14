import React from 'react';
import './Hero.css';

function Hero() {
	return (
		<div className='hero' id='home'>
			<div className='content'>
				<div className='ellipse'></div>
				<div>
					<h1 className='hero-main-header'>
						<span className='header-line'>―</span>Hi, I am Joey Chang
					</h1>
					<h2 className='hero-sub-header'>Front End Developer</h2>
				</div>

				<div className='right-content'>
					<p className='hero-main-paragraph'>
						I create inclusive, accessible digital websites. I believe in using
						web-developing as a tool to elevate human interaction with
						technology that scale.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
