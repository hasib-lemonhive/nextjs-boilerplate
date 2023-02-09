import { PortableText } from '@portabletext/react';
import { CustomComponents } from './config';
import { ICustomPortableText } from './interface';

/**
 * This element renders portable text according to custom
 * blocks and schemas used in sanity's portable text.
 * @param {object}  ICustomPortableText
 * @returns JSX.Element
 */
export const CustomPortableText = ({ content }: ICustomPortableText) => {
  return (
    <article className="max-w-full space-y-4 prose">
      <PortableText value={content} components={CustomComponents} />
    </article>
  );
};
