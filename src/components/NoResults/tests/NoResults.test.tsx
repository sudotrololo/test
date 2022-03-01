import React from 'react';
import { render } from '@testing-library/react';

import NoResults from '../NoResults';

const testId = 'testingNoResults';

const renderComponent = (props: null) => render(
  <NoResults
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент NoResults', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
