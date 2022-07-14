import React from 'react';
import './Portfolio.css';
import { useEffect, useState } from 'react';
import LinkIcon from '../../assets/link-icon.png';
import GithubIcon from '../../assets/github-icon.png';

function Portfolio() {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch('https://jojos-portfolio.herokuapp.com/api/portfolios')
			.then((res) => res.json())
			.then((res) => {
				setDetails(res);
			});
	}, []);
	return (
		<div className='detail-container' id='projects'>
				<h2>Some Things I've Built</h2>
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
								<h3 className='card-header'>Featured Project</h3>
								<h4 className='card-title'>{detail.title}</h4>
								<p className='card-description'>{detail.description}</p>
								<p className='card-created'>{detail.created}</p>
								<div className='anchor-links'>
									<a
										href={detail.deployed_site}
										rel='noopener noreferrer'
										target='_blank'>
										<img src={LinkIcon} alt='link icon' className='linkIcon' />
									</a>
									<a
										href={detail.github}
										rel='noopener noreferrer'
										target='_blank'>
										<img
											src={GithubIcon}
											alt='github icon'
											className='github-icon'
										/>
									</a>
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
