import { render, screen, fireEvent } from '@testing-library/react';
import path from 'path';
import { promises as fsp } from 'fs';
import '@testing-library/jest-dom/extend-expect';
import nock from 'nock';
import React from 'react';
import httpAdapter from 'axios/lib/adapters/http';
import axios from 'axios';
import App from '../src/components/App.jsx';

axios.defaults.adapter = httpAdapter;

nock.disableNetConnect();

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test('app', async () => {
  const data1 = await fsp.readFile(getFixturePath('response1.json'));
  nock('https://api.allorigins.win').get(/.*/)
    .reply(200, data1);
  render(<App />);
  const titleElement = await screen.findByText(/Врачи/i);
  expect(titleElement).toBeInTheDocument(); // title
  expect(screen.getByText(/Российские медики/i)).toBeInTheDocument(); // description
  expect(screen.getByAltText(/Врачи/i)).toBeInTheDocument(); // image
  nock('https://api.allorigins.win').get(/.*/)
    .reply(200, { contents: 'Врачи грачи' });
  fireEvent.click(titleElement);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  expect(await screen.findByText(/Врачи грачи/i)).toBeInTheDocument();
});

afterEach(() => {
  jest.resetAllMocks();
});
