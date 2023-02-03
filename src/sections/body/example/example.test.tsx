import { render } from '@testing-library/react';
import ExampleBody from '.';
import { mockdata } from './mock-data';

it('Renders Example Body section correctly', () => {
  const { getByRole } = render(<ExampleBody {...mockdata} />);
  const element = getByRole('example-body-section');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
