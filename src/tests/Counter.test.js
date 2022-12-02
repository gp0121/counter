// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';
// import the Counter component here

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId(/count/i)).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const initial = screen.getByTestId(/count/i).innerHTML;
  userEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByTestId(/count/i).innerHTML).toBe('' + (parseInt(initial) + 1));
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const initial = screen.getByTestId(/count/i).innerHTML;
  userEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByTestId(/count/i).innerHTML).toBe('' + (parseInt(initial) - 1));
  // Complete the unit test below based on the objective in the line above
});
