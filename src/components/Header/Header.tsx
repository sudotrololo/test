import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderType } from '../../models/HeaderType';
import SearchInput from '../SearchInput';
import classes from './Header.module.scss';

const Header: React.FC<HeaderType> = (props) => {
  const { searchInputHandler, inputValue, filtered } = props;

  return (
    <div className={classes.header}>

      <h1 className={classes.title}> This uses the Rick and Morty API</h1>
      <label className={classes.label} htmlFor="searchInput">Search character</label>
      <br />
      <SearchInput name="searchInput" searchInputHandler={searchInputHandler} inputValue={inputValue} filtered={filtered} />
      <nav>
        <ul className={classes.nav}>
          <li><Link className={classes.btn} to="/about">ABOUT</Link></li>
          <li><Link className={classes.btn} to="/list">LIST</Link></li>
          <li><Link className={classes.btn} to="/cards">CARDS</Link></li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
