import { render } from '@testing-library/react';
import Card from '.';
import { mockDog } from './mock-data';

it('renders card correctly', () => {
  const { getByRole } = render(<Card {...mockDog} />);
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

it('renders card correctly with link', () => {
  const { getByRole } = render(
    <Card link="https://www.google.com" {...mockDog} />
  );
  const element = getByRole('presentation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
