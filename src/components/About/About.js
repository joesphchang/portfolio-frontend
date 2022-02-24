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
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
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
