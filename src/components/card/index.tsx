import React from 'react';
import { CardImageDimensions, ICard } from './interfaces';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './card.module.scss';
import { PortableText } from '@portabletext/react';

function BaseCard({ dog, testId }: Omit<ICard, 'link'>) {
  return (
    <div className="p-10" data-testid={testId || undefined}>
      <div className={Styles.card}>
        <Image
          height={CardImageDimensions.height}
          width={CardImageDimensions.width}
          src={dog.image.url}
          alt={dog.image.alt}
          placeholder={'blur'}
          blurDataURL={dog.image.lqip}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{dog.name}</div>
          <div className="text-gray-700 dark:text-slate-200 text-base truncate">
            <PortableText value={dog.description} />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
}

function Card({ link, dog, testId }: ICard) {
  if (link !== undefined) {
    return (
      <Link href={link}>
        <BaseCard dog={dog} testId={testId} />
      </Link>
    );
  } else {
    return <BaseCard dog={dog} testId={testId} />;
  }
}

export default Card;
