import { render, screen } from '@testing-library/react';
import App from './App';

test('find text gubbe', () => {
  render(<App />);
  expect(screen.getByText('gubbe')).toBeInTheDocument();
});
