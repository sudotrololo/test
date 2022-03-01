import React from 'react';
import { render, screen } from '@testing-library/react';

import classes from './Err.module.scss';

describe('Наличие стилей в компоненте Error', () => {
  it('должен иметь стиль', () => {
    render(<h2 className={classes.err}>Something went wrong...</h2>);
    expect(screen.getByRole('heading')).toHaveClass('err');
    expect(screen.getByRole('heading')).toHaveTextContent('Something went wrong...');
  });
});
