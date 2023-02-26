import Link from 'next/link';
import { ILinkWrapper } from './interface';
import Styles from './link-wrapper.module.scss';
import clsx from 'clsx';

/**
 * This component will wrap its children with a next link.
 * If we want to globally control the behaviour of links, then using this
 * component for all links would be STRONGLY advised.
 * @param href
 * @param openNewTab
 * @param children
 * @param isStyled
 * @returns
 */

export function LinkWrapper({
  href,
  isOpenNewTab,
  children,
  isStyled = true,
}: ILinkWrapper) {
  const styled = isStyled !== undefined && isStyled;
  const linkClasses = clsx({ [Styles['link']]: styled });
  return (
    <Link
      className={linkClasses}
      href={href}
      target={isOpenNewTab ? '_blank' : '_self'}
      rel={href.startsWith('/') ? 'noreferrer noopener' : undefined}
    >
      {styled ? <span>{children}</span> : <>{children}</>}
    </Link>
  );
}
