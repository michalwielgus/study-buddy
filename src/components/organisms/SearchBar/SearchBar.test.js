import { setupServer } from 'msw/node';
import handlers from 'mocks/handlers';
import { render, screen, fireEvent } from 'testUtils';
import SearchBar from './SearchBar';

const server = setupServer(...handlers);

describe('SearchBar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('should display users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'kr' } });

    await screen.findByText('Krzysztof Batko');
  });
});
