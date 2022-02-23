import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';
import { useState } from 'react';

function Navigation() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const closeMenu = () => setOpen(false);

	return (
		<div className='header'>
			<nav className='navbar'>
				<a href='/' className='logo'>
					Joey Chang
				</a>
				<div className='hamburger' onClick={handleOpen}>
					{open ? (
						<FaTimes size={30} style={{ color: '#ffffff' }} />
					) : (
						<FaBars size={30} style={{ color: '#ffffff' }} />
					)}
				</div>
				<ul className={open ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<a href='/' onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className='nav-item'>
						<a href='#about' onClick={closeMenu}>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a href='#projects' onClick={closeMenu}>
							Projects
						</a>
					</li>
					<li className='nav-item'>
						<a href='#contact' onClick={closeMenu}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
