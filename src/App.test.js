import { render, screen } from '@testing-library/react';
import App from './App';

test('find text Ändra ord', () => {
  render(<App />);
  expect(screen.getByText('Ändra ord')).toBeInTheDocument();
});
