import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterCardsType } from '../../../models/CharacterCardsType';
import classes from './CharacterCard.module.scss';

const CharacterCard: React.FC<CharacterCardsType> = (props) => (
  <>
    <ul className={classes.wrapper}>
      {props.filtered.map((card) => (
        <li key={card.id} className={classes.card}>
          <div className={classes.left}>
            <h2>{card.name}</h2>
            <img src={card.image} alt={card.name} />
          </div>
          <div className={classes.right}>
            <h3>About this character:</h3>
            <p><strong>Identificator: </strong>{card.id}</p>
            <p><strong>Gender: </strong>{card.gender}</p>
            <p><strong>Type: </strong>{card.type === '' ? 'Common' : card.type}</p>
            <p><strong>Species: </strong>{card.species}</p>
            <p><strong>Status: </strong>{card.status}</p>
            <p><strong>Created: <br /></strong>{card.created}</p>
          </div>
          <Link to={`/single/${card.id}`} />
        </li>
      ))}
    </ul>

  </>
);

export default CharacterCard;
