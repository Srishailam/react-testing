import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const greetElement = screen.getByText(/Hello/i);
  expect(greetElement).toBeInTheDocument();
});

test('Greet renders name', () => {
  render(<Greet name="John" />);
  const greetElement = screen.getByText(/Hello John/i);
  expect(greetElement).toBeInTheDocument();
});