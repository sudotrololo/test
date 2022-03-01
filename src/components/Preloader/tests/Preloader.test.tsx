import React from 'react';
import { render } from '@testing-library/react';

import Preloader from '../Preloader';

const testId = 'testingPreloader';

const renderComponent = (props: null) => render(
  <Preloader
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Preloader', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
