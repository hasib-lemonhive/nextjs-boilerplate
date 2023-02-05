import Link from 'next/link';
import { ILinkWrapper } from './interface';

/**
 * This component will wrap its children with a next link.
 * If we want to globally control the behaviour of links, then using this
 * component for all links would be STRONGLY advised.
 * @param href
 * @param openNewTab
 * @param children
 * @returns
 */

/**
 * TODO:
 * Rabbani - apply tailwind styles and see it effect cards and link text
 * wrapped with this element.
 */
export function LinkWrapper({ href, openNewTab, children }: ILinkWrapper) {
  return (
    <Link
      className="text-cyan-500 underline"
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      rel={href.startsWith('/') ? 'noreferrer noopener' : undefined}
    >
      {children}
    </Link>
  );
}
