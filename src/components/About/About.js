import React from 'react';
import Hero from '../../assets/hero-picture.jpg';
import './About.css';

function About() {
	return (
		<div className='about' id='about'>
			<div className='container'>
				<img src={Hero} alt='joey' />
				<div className='text-container'>
					<h2 className='about-header'>
						<span className='header-line'>―</span> About Me
					</h2>
					<p>
						Hello! I’m Joey Chang, a former brand and runway photographer turned
						front-end software engineer. My journey into tech began at General
						Assembly and is currently expanding with an Associate Degree in IT -
						Web Software Development from Madison College. My background behind
						the lens deeply influences how I code—it trained my eye for
						composition, accessibility, and the fine details of user
						interaction.
					</p>
					<p>
						I am passionate about bridging the gap between that artistic vision
						and robust, scalable architecture to deliver highly engaging web
						experiences.
					</p>
					<div className='technology-container'>
						<h5>
							Here are a few technologies I've been working with recently:
						</h5>
						<ul className='list-of-technologies'>
							<li className='list-text'>☼ JavaScript (ES6+)</li>
							<li className='list-text'>☼ React & Next.js</li>
							<li className='list-text'>☼ Java & Python</li>
							<li className='list-text'>☼ Node.js & Django</li>
							<li className='list-text'>☼ HTML/CSS (Material UI)</li>
							<li className='list-text'>☼ AWS & Relational DBs</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
