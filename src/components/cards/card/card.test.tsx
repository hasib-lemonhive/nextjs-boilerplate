import { render } from '@testing-library/react';
import Card from '.';
import { mockDog } from './mock-data';

it('renders Buy Ticket Card correctly', () => {
  const { getByRole } = render(
    <Card link="https://www.google.com" dog={mockDog} />
  );
  const element = getByRole('base-card');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
