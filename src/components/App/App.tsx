import React, { ReactElement, useEffect, useState } from 'react';
/* import { Route, Routes, Link } from 'react-router-dom'; */

import { CharacterType } from '../../models/CharacterType';
import AppRouter from '../AppRouter';
/* import CharacterList from '../Character/CharacterList'; */
/* import Characters from '../Characters'; */
import Err from '../Err';
import Header from '../Header';
import NoResults from '../NoResults';
import Preloader from '../Preloader';
/* import Preloader from '../Preloader'; */
import classes from './App.module.scss';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]); // Персонажи
  const [filtered, setFiltered] = useState<CharacterType[]>([]); // Отфильтрованные персонажи
  const [inputValue, setInputValue] = useState<string>(''); // Строка поиска
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .then(() => { setTimeout(() => { setLoading(false); }, 700); }); // Это необходимо только для демонстрации работы лоадера
  }, []); // При монтировании наполняем characters всеми персонажами

  useEffect(() => {
    if (inputValue.length > 2) {
      setFiltered(characters.filter((character) => character.name.toLocaleLowerCase().includes(inputValue)));
    } else {
      setFiltered(characters);
    }
  }, [characters, inputValue]); // Фильтрация работает при изменении стейта со всеми персонажами (при загрузке страницы) и при изменении в строке поиска

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const checksTheResult = (): null | ReactElement => {
    if (!filtered.length) {
      return <NoResults />;
    }
    return null;
  };

  try {
    return (
      <>
        <div className={classes.container}>
          <Header searchInputHandler={searchInputHandler} inputValue={inputValue} filtered={filtered.length} />
          {loading ? <Preloader /> : <AppRouter filtered={filtered} />}
          {checksTheResult()} {/* // Если нет совпадений при поиске, показываем компонент NoResults */}
        </div>
      </>
    );
  } catch {
    return <Err />; // Если при рендере компонента возникнет ошибка, рендерим компоненнт ошибки вместо контента
  }
};

export default App;
