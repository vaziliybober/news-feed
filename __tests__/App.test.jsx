import { render, screen } from '@testing-library/react';
import path from 'path';
import { promises as fsp } from 'fs';
import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/dom';
import nock from 'nock';
import React from 'react';
import httpAdapter from 'axios/lib/adapters/http';
import axios from 'axios';
import App from '../src/components/App.jsx';

axios.defaults.adapter = httpAdapter;

nock.disableNetConnect();

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

test('app', async () => {
  const data1 = await fsp.readFile(getFixturePath('response1.json'));
  nock('https://api.allorigins.win').get(/.*/)
    .reply(200, data1);
  render(<App />);
  await waitFor(() => {
    expect(document.body).toHaveTextContent(/Российские медики/i);
  });
  const article = screen.getByText(/Российские медики/i);
  expect(article).toBeInTheDocument();
});
