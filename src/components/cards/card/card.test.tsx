import { render } from '@testing-library/react';
import Card from '.';
import { mockDog } from './mock-data';

it('renders card correctly', () => {
  const { getByTestId } = render(<Card dog={mockDog} />);
  const element = getByTestId('card');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('renders card correctly with link', () => {
  const { getByTestId } = render(
    <Card link="https://www.google.com" dog={mockDog} />
  );
  const element = getByTestId('card');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
