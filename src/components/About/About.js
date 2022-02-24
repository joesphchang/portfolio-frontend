import React from 'react';
import Hero from '../../assets/hero-picture.jpg';
import './About.css';

function About() {
	return (
		<div className='about'>
			<div className='container'>
				<img src={Hero} alt='joey' />
				<div className='text-container'>
					<h2>About Me</h2>
					<span className='line'></span>
					<p>
						Born in Atlanta and raised in Wisconsin, I recently moved back to
						the big A to start a career in Photography. From being flown-out to
						different parts of the country, streetwear & fashion brand
						recognition, and big fashion outlets I was hungry for more. I wanted to pursue a career in Software Engineering to
						take my creative perspective into a new realm. I’ve always had the
						knack for technology and web-developing. Moving into a career like
						software engineer allows me a new creative outlet.
					</p>
					<div className='icon-container'>
						<h2>Skills</h2>
						<span className='line'></span>
						<div className='icons'>
							<i class='devicon-html5-plain-wordmark colored'></i>
							<i class='devicon-css3-plain-wordmark colored'></i>
							<i class='devicon-javascript-plain colored'></i>
							<i class='devicon-python-plain-wordmark colored'></i>
							<i class='devicon-react-original-wordmark colored'></i>
							<i class='devicon-bootstrap-plain-wordmark colored'></i>
							<i class='devicon-mongodb-plain-wordmark colored'></i>
							<i class='devicon-django-plain-wordmark colored'></i>
							<i class='devicon-postgresql-plain-wordmark colored'></i>
							<i class='devicon-github-original-wordmark'></i>
							<i class='devicon-git-plain-wordmark colored'></i>
							<i class='devicon-heroku-original-wordmark colored'></i>
							<i class='devicon-nodejs-plain colored'></i>
							<i class='devicon-npm-original-wordmark colored'></i>
							<i class='devicon-figma-plain colored'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
