import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { FaLink, FaGithub } from 'react-icons/fa';
import dataInfo from '../../portfolio_data.json';

function Portfolio() {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		setDetails(dataInfo);
	}, []);

	return (
		<div className='detail-container' id='projects'>
			<div className='detail-content-wrapper'>
				<h2 className='detail-headliner'>
					<span className='header-line'>―</span> Some Things I've Built
				</h2>

				<ul className='card-list'>
					{details.map((detail, index) => (
						<li className='card-item' key={index}>
							<div className='card-header-row'>
								<div className='card-header-text'>
									<h3 className='card-header'>{detail.category}</h3>
									<h4 className='card-title'>{detail.title}</h4>
								</div>
								<div className='anchor-links'>
									{detail.deployed_site && (
										<a
											href={detail.deployed_site}
											rel='noopener noreferrer'
											target='_blank'
											className='anchor-icon-link'>
											<FaLink />
										</a>
									)}
									{detail.github && (
										<a
											href={detail.github}
											rel='noopener noreferrer'
											target='_blank'
											className='anchor-icon-link'>
											<FaGithub />
										</a>
									)}
								</div>
							</div>

							<div className='card-description-container'>
								<p className='card-description'>{detail.description}</p>
								<div className='card-created'>{detail.created}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Portfolio;
