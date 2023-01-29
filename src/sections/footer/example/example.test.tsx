import { render } from '@testing-library/react';
import ExampleFooter from '.';

it('Renders Example Footer correctly', () => {
  const { getByTestId } = render(<ExampleFooter testId="footer" />);
  const element = getByTestId('footer');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
