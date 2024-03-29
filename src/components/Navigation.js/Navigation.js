import React from 'react';
import { Link } from 'react-scroll';
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
				<Link
					to='home'
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className='logo'>
					JC.
				</Link>
				<div className='hamburger' onClick={handleOpen}>
					{open ? (
						<FaTimes size={30} style={{ color: '#000000' }} />
					) : (
						<FaBars size={30} style={{ color: '#000000' }} />
					)}
				</div>
				<ul className={open ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link
							to='home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							onClick={closeMenu}>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='about'
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							onClick={closeMenu}>
							About
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='projects'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							onClick={closeMenu}>
							Projects
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='contact'
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							onClick={closeMenu}>
							Contact
						</Link>
					</li>
					<li className='nav-item'>
						<a
							href='https://docs.google.com/document/d/e/2PACX-1vRGbTj50grlhhvEcr9Qy4N1E4zGADWLjIYhiXTwydlRPxEksXPKv6vYMEtiaP9ldi59aX3F3EE0zGA7/pub'
							target='_blank'
							rel='noreferrer'>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
