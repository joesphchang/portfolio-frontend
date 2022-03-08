import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { BiNotepad } from 'react-icons/bi';

function Contact(props) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_21en2lr',
				'template_zwy52a7',
				form.current,
				'user_VYIsbxWvtTSOtRNEBLSol'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='form' id='contact'>
			<form ref={form} onSubmit={sendEmail} className='form-container'>
				<div className='form-title'>
					<h2>Contact Me</h2>
					<span className='line'></span>
				</div>
				<label className='label'>Name</label>
				<input type='text' name='user_name' className='input' />
				<label className='label'>Email</label>
				<input type='email' name='user_email' className='input' />
				<label className='label'>Message</label>
				<textarea name='message' className='message-input' />
				<input type='submit' value='Send' className='submit-btn' />
			</form>
			<div className='social-links'>
				<h3>Portfolio</h3>
				<span className='line'></span>
				<div className='form-icons'>
					<a
						href='https://www.linkedin.com/in/joesphchang/'
						rel='noopener noreferrer'
						target='_blank'>
						<i class='devicon-linkedin-plain colored'></i>
					</a>
					<a
						href='https://github.com/joesphchang'
						rel='noopener noreferrer'
						target='_blank'>
						<i class='devicon-github-original-wordmark'></i>
					</a>
					<a
						href='https://docs.google.com/document/d/1EKujWp8x3uI6yy_Rl6EGJ_S7iPK-4S5UodDy6vIcLYM/edit?usp=sharing'
						target='_blank'
						rel='noreferrer'>
						<BiNotepad />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
