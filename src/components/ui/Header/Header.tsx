import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.component}>
    <nav className={classes.navigation}>
      <NavLink
        to="/"
        className={classes.link}
      >
        Главная
      </NavLink>

      <NavLink
        to="/catalog"
        className={classes.link}
      >
        Каталог
      </NavLink>
    </nav>
  </header>
);

export default Header;
