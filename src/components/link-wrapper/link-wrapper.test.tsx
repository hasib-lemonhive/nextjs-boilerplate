import { render } from '@testing-library/react';
import { LinkWrapper } from '.';
import { linkArgs } from './test-config';

it.each(linkArgs)(
  'Render Link with appropriate attributes',
  ({ href, openNewTab, children }) => {
    const { getByRole } = render(
      <LinkWrapper href={href} openNewTab={openNewTab}>
        {children}
      </LinkWrapper>
    );
    const element = getByRole('link');
    expect(element).toHaveAttribute('href', href);
    expect(element).toHaveAttribute('target', openNewTab ? '_blank' : '_self');
    expect(element).toBeInTheDocument();
  }
);
