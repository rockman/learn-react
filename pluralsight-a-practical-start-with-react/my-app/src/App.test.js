import { render, screen } from '@testing-library/react';
import App from './main-page';

test('renders Featured Widget link', () => {
  render(<App />);
  const headerElement = screen.getByText(/Featured Widget/i);
  expect(headerElement).toBeInTheDocument();
});
