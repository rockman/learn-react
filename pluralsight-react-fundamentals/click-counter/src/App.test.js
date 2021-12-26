import { render, screen } from '@testing-library/react';
import App from './App';

test('renders div', () => {
  render(<App />);
  const divElement = screen.getByText(/This div has been clicked/i);
  expect(divElement).toBeInTheDocument();
});
