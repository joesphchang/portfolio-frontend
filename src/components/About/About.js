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
						Hello! I’m Joey Chang, a visual artist turned web developer. My
						journey started at the General Assembly bootcamp and is now
						advancing with an Associate Degree in IT - Web Software Development
						from Madison College. My artistic background enriches my technical
						skills, allowing me to approach projects with creativity and
						precision.
					</p>
					<p>
						I’m passionate about creating user-friendly experiences and
						continually improving my skills. Each project lets me blend my
						artistic vision with innovative solutions, aiming to deliver
						exceptional and engaging web experiences.
					</p>

					<div className='technology-container'>
						<h5>
							Here are a few technologies I've been working with recently:
						</h5>
						<ul className='list-of-technologies'>
							<li className='list-text'>☼ JavaScript (ES6+)</li>
							<li className='list-text'>☼ React</li>
							<li className='list-text'>☼ Node.JS</li>
							<li className='list-text'>☼ MongoDB</li>
							<li className='list-text'>☼ HTML/CSS</li>
							<li className='list-text'>☼ mySQL</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
