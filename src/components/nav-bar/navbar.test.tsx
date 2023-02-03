import { render } from '@testing-library/react';
import Component from '.';

it('Renders Example Navbar correctly ', () => {
  /**
   * Mock window.matchMedia
   */
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const { getByRole } = render(<Component />);
  const element = getByRole('navigation');
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
