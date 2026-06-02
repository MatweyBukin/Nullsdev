import React from 'react';
import PortfolioWidget from './PortfolioWidget';
import {telegramLink} from "../config"


function Menu() {
  return (
    <>
        <h1 className='menu-main-name'>Nulls'dev</h1>
        <span className='menu-description'>
        Fullstack разработчик python/js/react<br/>
        стаж 4 года<br/>
        Тг: @nullsdev
        </span>
        <a className='menu-button' href={telegramLink} target="_blank" rel="noopener noreferrer">
          Связаться со мной
        </a>
        <PortfolioWidget/>
    </>
  );
}

export default Menu;
