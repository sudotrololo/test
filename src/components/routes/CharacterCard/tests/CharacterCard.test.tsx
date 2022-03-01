import React from 'react';
import puppeteer from 'puppeteer';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CharacterCard from '../CharacterCard';
import { CharacterCardsType } from '../../../../models/CharacterCardsType';
import { data } from '../../../App/mockData';

const renderComponent = (props: CharacterCardsType) => render(
  <MemoryRouter>
    <CharacterCard filtered={[data]} />
  </MemoryRouter>,
);
describe('Компонент CharacterCard', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('должен соответствовать снимку', () => {
    const tree = renderer
      .create(<CharacterCard filtered={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Компонент содержит надпись rick', () => {
    const { getByText } = render(<MemoryRouter><CharacterCard filtered={[data]} /></MemoryRouter>);
    expect(getByText('rick')).toBeInTheDocument();
  });

  it('Компонент имеет класс listItem', () => {
    const { getByRole } = render(<MemoryRouter><CharacterCard filtered={[data]} /></MemoryRouter>);
    expect(getByRole('listitem')).toHaveClass('card');
  });

  it('Должен вывести нужного персонажа после клика на его карточку', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://sudotrololo.github.io/test/');
    await page.waitForSelector('#root > div > ul > li:nth-child(1) > a');
    await page.click('#root > div > ul > li:nth-child(1) > a');
    await page.waitForSelector('h2');
    const element = await page.$('h2');
    const value = await page.evaluate((el) => el.textContent, element);
    await expect(value.trim()).toBe('Rick Sanchez');
    await browser.close();
  });
});
