import { render } from '@testing-library/react';
import ExampleFooter from '.';

it('Renders Example Footer correctly', () => {
  const { getByRole } = render(<ExampleFooter />);
  const element = getByRole('footer');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
