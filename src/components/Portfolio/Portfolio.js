import React from 'react'
import { useEffect, useState } from 'react'

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
    <div>
        <h2>Projects</h2>
        <ul>
            {details.map((detail) => {
                return (
                    <li>
                        <img src={detail.image} alt='project info' />
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Portfolio