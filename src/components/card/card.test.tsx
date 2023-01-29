import { render } from '@testing-library/react';
import Card from '.';

it('renders Buy Ticket Card correctly', () => {
  const { getByTestId } = render(
    <Card
      link="https://www.google.com"
      header="Hello"
      paragraph="world"
      testId="card"
    />
  );
  const element = getByTestId('card');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
