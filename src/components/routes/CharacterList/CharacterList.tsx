import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterListType } from '../../../models/CharacterListType';
import classes from './CharacterList.module.scss';

const CharacterList: React.FC<CharacterListType> = (props) => (
  <>
    <ul className={classes.wrapper}>
      {props.filtered.map((listItem) => (
        <li key={listItem.id} className={classes.listItem}>
          <h2>{listItem.name}</h2>
          <p><strong>Gender: </strong>{listItem.gender}</p>
          <p><strong>Type: </strong>{listItem.type === '' ? 'Common' : listItem.type}</p>
          <p><strong>Status: </strong>{listItem.status}</p>
          <Link to={`/single/${listItem.id}`} />
        </li>
      ))}
    </ul>
  </>
);

export default CharacterList;
