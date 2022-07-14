import React from 'react';
import Hero from '../../assets/hero-picture.jpg';
import './About.css';

function About() {
	return (
		<div className='about' id='about'>
			<div className='container'>
				<img src={Hero} alt='joey' />
				<div className='text-container'>
					<h2 className='about-header'><span className='header-line'>―</span> About Me</h2>
					<p>
						Talented visual artist transitioned into Front-End Developer. For
						the last few months, I have lived in Arlington, VA, and moved from
						Atlanta, GA. I am looking to contribute life-long skills, including
						attention to detail, creative direction, and is an excellent team
						player, in order to achieve and scale applications to the next
						level.
					</p>
					<p>
						My passion for Front End Engineer led me to attend a bootcamp called
						'General Assembly' and turn into a software engineer. The
						opportunity to create an optimal experience for every user is a
						privilege.
					</p>
					<p>
						I am currently focused on developing user-friendly projects and
						practicing the languages I have acquired.
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
							<li className='list-text'>☼ WordPress</li>
							<li className='list-text'>☼ PostgresSQL</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
