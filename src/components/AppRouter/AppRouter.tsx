import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../routes/About';
import { AppRouterType } from '../../models/AppRouterType';
import CharacterCard from '../routes/CharacterCard';
import CharacterList from '../routes/CharacterList';
import Single from '../routes/Single';
import Err from '../Err';
/* import { data } from '../App/mockData'; */

const AppRouter: React.FC<AppRouterType> = (props) => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/list" element={<CharacterList filtered={props.filtered} />} />
    <Route path="/cards" element={<CharacterCard filtered={props.filtered} />} />
    <Route path="/" element={<CharacterCard filtered={props.filtered} />} />
    <Route path="/single/:id" element={<Single filtered={props.filtered} />} />
    <Route path="/*" element={<Err />} />
  </Routes>
);

export default AppRouter;
