import React from 'react';
import { render } from '@testing-library/react';

import SearchInput from '../SearchInput';
import { InputValueType } from '../../../models/InputValueType';

const testId = 'testingSearchInput';

const renderComponent = (props: InputValueType) => render(
  <SearchInput
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchInput', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
