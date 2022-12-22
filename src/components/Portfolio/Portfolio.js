import React from 'react';
import './Portfolio.css';
import { useEffect, useState } from 'react';
import LinkIcon from '../../assets/link-icon.png';
import GithubIcon from '../../assets/github-icon.png';
import { FaLink, FaGithub } from 'react-icons/fa';
import dataInfo from '../../portfolio_data.json';

function Portfolio() {
	const [details, setDetails] = useState([]);

	const fetchIconData = () => Promise.resolve(() => dataInfo);
	useEffect(() => {
		fetchIconData().then((jsonData) => setDetails(jsonData));
	}, []);
	
	return (
		<div className='detail-container' id='projects'>
			<h2 className='detail-headliner'>
				<span className='header-line'>―</span> Some Things I've Built
			</h2>
			<div className='card-container'>
				<ul className='card-list'>
					{details.map((detail) => {
						return (
							<li className='card-item'>
								<img
									src={detail.image}
									alt='project info'
									className='detail-image'
								/>
								<div className='card-description-container'>
									<h3 className='card-header'>Featured Project</h3>
									<h4 className='card-title'>{detail.title}</h4>
									<p className='card-description'>{detail.description}</p>
									<p className='card-created'>{detail.created}</p>
									<div className='anchor-links'>
										<a
											href={detail.deployed_site}
											rel='noopener noreferrer'
											target='_blank'
											className='anchor-icon-link'>
											<FaLink />
										</a>
										<a
											href={detail.github}
											rel='noopener noreferrer'
											target='_blank'
											className='anchor-icon-link'>
											<FaGithub />
										</a>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Portfolio;
