import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App div', () => {
  const turn = {
    author: {
      url: 'some url'
    },
    books: ['foo', 'bar']
  };

  render(<App turn={turn} />);
  const divElement = screen.getByText(/Author Quiz/i);
  expect(divElement).toBeInTheDocument();
});
