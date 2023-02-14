import { render } from '@testing-library/react';
import Button from '.';
import { buttonProps, redirectButtonProps } from './mock-data';

it('renders button correctly', () => {
  const { getByRole } = render(<Button {...buttonProps} />);
  const element = getByRole('button');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
it('renders redirect button correctly', () => {
  const { getByRole } = render(<Button.Redirect {...redirectButtonProps} />);
  const element = getByRole('link');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
