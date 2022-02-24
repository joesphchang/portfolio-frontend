import React from 'react';
import './Portfolio.css';
import { useEffect, useState } from 'react';

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
								<p>{detail.description}</p>
								<a href={detail.deployed_site}>Deployed Site</a>
                                <a href={detail.github}>Github</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Portfolio;
