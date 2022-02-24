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
		<div className='detail-container'>
			<h2>Projects</h2>
			<div className='card-container'>
				<ul className='card-list'>
					{details.map((detail) => {
						return (
							<li className='card-item'>
								<img src={detail.image} alt='project info' />
								<h3>{detail.title}</h3>
								<span className='line'></span>
								<p>{detail.description}</p>
								<div className='anchor-links'>
									<a href={detail.deployed_site}>
										<img src={LinkIcon} alt='link icon' className='linkIcon' />
									</a>
									<a href={detail.github}>
										<img src={GithubIcon} alt='github icon' className='github-icon'/>
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
