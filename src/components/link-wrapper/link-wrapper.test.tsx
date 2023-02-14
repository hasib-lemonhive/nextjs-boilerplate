import { render } from '@testing-library/react';
import { LinkWrapper } from '.';
import { linkArgs } from './test-config';

it.each(linkArgs)(
  'Render Link with appropriate attributes',
  ({ href, isOpenNewTab, children, isStyled }) => {
    const { getByRole } = render(
      <LinkWrapper href={href} isOpenNewTab={isOpenNewTab} isStyled={isStyled}>
        {children}
      </LinkWrapper>
    );
    const element = getByRole('link');
    expect(element).toHaveAttribute('href', href);
    expect(element).toHaveAttribute(
      'target',
      isOpenNewTab ? '_blank' : '_self'
    );
    expect(element).toBeInTheDocument();
  }
);
