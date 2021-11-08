import { render, screen, fireEvent } from 'testUtils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('should display users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Dec' } });

    await screen.findByText(/Lonnie Deckow/);
  });
});
