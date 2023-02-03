import { render } from '@testing-library/react';
import ExampleHero from '.';
import { mockdata } from './mock-data';

it('Renders Example Hero correctly', () => {
  const { getByRole } = render(<ExampleHero {...mockdata} />);
  const element = getByRole('hero');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
