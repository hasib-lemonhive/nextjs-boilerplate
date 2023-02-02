import { render } from '@testing-library/react';
import Card from '.';
import { mockDog } from './mock-data';

it('renders Buy Ticket Card correctly', () => {
  const { getByTestId } = render(
    <Card link="https://www.google.com" dog={mockDog} testId="card" />
  );
  const element = getByTestId('card');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
