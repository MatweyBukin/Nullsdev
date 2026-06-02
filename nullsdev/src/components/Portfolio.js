import {useState, useContext} from 'react';
import {portfolio} from '../config';
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
  return (
    <>
        <span className='portfolio-title'>Портфолио</span>
        <div className='portfolio'>
            {portfolio.map(item =>
                <PortfolioItem src={`/portfolio_images/${item.img}`} description={item.description}/>
            )}
        </div>
    </>
  );
}

export default Portfolio;
