import React from 'react';

import { InputValueType } from '../../models/InputValueType';
import classes from './SearchInput.module.scss';

const SearchInput: React.FC<InputValueType> = (props) => {
  const { inputValue, searchInputHandler, filtered } = props;
  return (
    <span className={classes.component}>
      <input className={classes.searchInput} type="text" value={inputValue} onChange={(event) => { searchInputHandler(event); }} />
      <p className={classes.found}>Results found: {filtered}</p>
    </span>
  );
};

export default SearchInput;
