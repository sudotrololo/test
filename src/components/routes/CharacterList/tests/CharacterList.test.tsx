import React from 'react';
import puppeteer from 'puppeteer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import CharacterList from '..';
import { data } from '../../../App/mockData';
import { CharacterCardsType } from '../../../../models/CharacterCardsType';

describe('Компонент CharacterList', () => {
  const renderComponent = (props: CharacterCardsType) => render(
    <MemoryRouter>
      <CharacterList filtered={[data]} />
    </MemoryRouter>,
  );
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('должен соответствовать снимку', () => {
    const tree = renderer
      .create(<CharacterList filtered={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Компонент содержит надпись rick', () => {
    const { getByText } = render(<MemoryRouter><CharacterList filtered={[data]} /></MemoryRouter>);
    expect(getByText('rick')).toBeInTheDocument();
  });

  it('Компонент имеет класс listItem', () => {
    const { getByRole } = render(<MemoryRouter><CharacterList filtered={[data]} /></MemoryRouter>);
    expect(getByRole('listitem')).toHaveClass('listItem');
  });

  it('Должен вывести нужного персонажа после клика на его карточку', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://sudotrololo.github.io/test/');
    await page.waitForSelector('#root > div > ul > li:nth-child(2) > a');
    await page.click('#root > div > ul > li:nth-child(2) > a');
    await page.waitForSelector('h2');
    const element = await page.$('h2');
    const value = await page.evaluate((el) => el.textContent, element);
    await expect(value.trim()).toBe('Morty Smith');
    await browser.close();
  });
});
