import React from 'react';
import './Contact.css';

function Contact(props) {
	return (
		<div className='contact-container' id='contact'>
			<div className='contact-text'>
				<h2 className='contact-header'>Get In Touch</h2>
				<p className='contact-paragraph'>
					I’m on the hunt for an opportunity to showcase my skills and contribute
					to a great company. If you have any questions or want to say hi, click "Say Hello". I’ll
					try my best to get back to you quickly as possible.{' '}
				</p>
			</div>
			<div className='anchor-box'>
				<a className='anchor-text' href='mailto:joesphschang@gmail.com'>
					Say Hello
				</a>
			</div>

			<div className='contact-icons'>
				<a
					className='contact-links'
					href='https://www.linkedin.com/in/joesphchang/'
					rel='noopener noreferrer'
					target='_blank'>
					<i class='devicon-linkedin-plain'></i>
				</a>
				<a
					className='contact-links'
					href='https://github.com/joesphchang'
					rel='noopener noreferrer'
					target='_blank'>
					<i class='devicon-github-original-wordmark'></i>
				</a>
			</div>
		</div>
	);
}

export default Contact;
