import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import { buttonProps, redirectButtonProps } from './mock-data';
import { buttonColorSchemes, buttonSizes } from './interface';
import { icons } from '@components/icons/interface';

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

describe('Given a mock function is passed to button', () => {
  it('Expect mockFunction to be called on button click', () => {
    const mockFunction = jest.fn();

    const props = { ...buttonProps, clickHandler: mockFunction };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});

describe.each([true, false])(
  'Given open new tab configurations',
  (isOpenNewTab) => {
    it(`Expect redirect button to contain href and ${
      isOpenNewTab ? 'target=_blank' : 'target=_self'
    }`, () => {
      const props = {
        ...buttonProps,
        href: 'https://www.google.com/',
        isOpenNewTab: isOpenNewTab,
      };
      const { getByTestId } = render(<Button.Redirect {...props} />);
      const button = getByTestId(buttonProps['data-testid']);

      expect((button.parentElement as HTMLAnchorElement).href).toEqual(
        'https://www.google.com/'
      );

      if (isOpenNewTab) {
        expect((button.parentElement as HTMLAnchorElement).target).toEqual(
          '_blank'
        );
      } else {
        expect((button.parentElement as HTMLAnchorElement).target).toEqual(
          '_self'
        );
      }
    });
  }
);

describe.each([...buttonSizes])('Given button size: %s', (size) => {
  it(`Expect button to have class ${size}`, () => {
    const props = { ...buttonProps, size: size };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);
    expect(button).toHaveClass(size);
  });
});

describe.each(icons)('Given icon option: %s', (iconName) => {
  it(`Expect button to have ${iconName}`, () => {
    const props = { ...buttonProps, iconName: iconName };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);
    expect(button).toMatchSnapshot();
  });
});

describe.each(buttonColorSchemes)('Given color scheme %s', (colorScheme) => {
  it(`Expect button to have class ${colorScheme}`, () => {
    const props = { ...buttonProps, colorScheme: colorScheme };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);

    expect(button).toHaveClass(colorScheme);
  });
});

// describe.each([true, false])('Given iconIsLeft boolean', (iconIsLeft) => {
//   it(`Expect button to ${
//     iconIsLeft ? 'not' : ''
//   } contain class: flex-row-reverse`, () => {
//     const props = { ...buttonProps, iconIsLeft: iconIsLeft };
//     const { getByTestId } = render(
//       <Button {...props} iconName="Arrow Right" />
//     );
//     const button = getByTestId(buttonProps['data-testid']);

//     if (iconIsLeft) {
//       expect(button).toHaveClass('flex-row-reverse');
//     } else {
//       expect(button).not.toHaveClass('flex-row-reverse');
//     }
//   });
// });
