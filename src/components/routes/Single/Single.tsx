import React from 'react';
import { useParams } from 'react-router-dom';

import { SingleType } from '../../../models/SingleType';
import Err from '../../Err';
import classes from './Single.module.scss';

const Single: React.FC<SingleType> = (props) => {
  const { id: paramsId } = useParams<string>();
  const [character] = props.filtered.filter((char) => (char.id.toString() === paramsId));
  if (!character) { // Если полученный из params id не существует среди id персонажей, отдаем компонент ошибки
    return <Err />;
  }
  const {
    name, image, status, species, episode, created, gender,
  } = character;
  return (
    <>
      <div className={classes.component}>
        <img src={image} alt={name} />
        <h2> {name}</h2>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Status: </strong>{status}</p>
        <p><strong>Species: </strong>{species}</p>
        <p><strong>Episodes: </strong>
          <ul className={classes.episodes}>
            {episode.map((currentEpisode) => {
              const numOfEpisode = currentEpisode.split('/');
              return (
                <li
                  className={classes.episode}
                  key={numOfEpisode[numOfEpisode.length - 1]}
                >
                  {numOfEpisode[numOfEpisode.length - 1]}
                </li>
              );
            })}
          </ul>
        </p>
        <p><strong>Created: </strong>{created}</p>
      </div>
    </>
  );
};

export default Single;
