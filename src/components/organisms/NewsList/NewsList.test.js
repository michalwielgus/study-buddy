import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'testUtils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsList, { query } from './NewsList';

const mock = new MockAdapter(axios);

describe('News List', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should display error when fetching failed', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<NewsList />);
    await screen.findByText(/Sorry/);
  });

  it('should render list if data were wetched', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          {
            id: 1,
            title: 'Test',
            category: 'Test',
            content: 'Test',
            image: { url: 'test' },
          },
        ],
      },
    });
    render(<NewsList />);
    await screen.findAllByText(/Test/);
  });
});
