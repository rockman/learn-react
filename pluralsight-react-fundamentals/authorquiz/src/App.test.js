import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App div', () => {
  render(<App />);
  const divElement = screen.getByText(/App goes here/i);
  expect(divElement).toBeInTheDocument();
});
