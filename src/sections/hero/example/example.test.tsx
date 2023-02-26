import { render } from '@testing-library/react';
import ExampleHero from '.';
import { mockdata } from './mock-data';

it('Renders Example Hero correctly', () => {
  const { getByTestId } = render(<ExampleHero {...mockdata} testId="hero" />);
  const element = getByTestId('hero');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
