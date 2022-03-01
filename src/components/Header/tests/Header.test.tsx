import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { HeaderType } from '../../../models/HeaderType';
import Header from '../Header';

const testId = 'testingHeader';

const renderComponent = (props: HeaderType) => render(
  <MemoryRouter>
    <Header
      data-testid={testId}
      {...props}
    />
  </MemoryRouter>
  ,
);

describe('Компонент Header', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
