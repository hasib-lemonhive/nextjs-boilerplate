import { render } from '@testing-library/react';
import ExampleBody from '.';
import { mockdata } from './mock-data';

it('Renders Example Body section correctly', () => {
  const { getByTestId } = render(<ExampleBody {...mockdata} testId="body" />);
  const element = getByTestId('body');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
