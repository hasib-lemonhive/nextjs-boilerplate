import React from 'react';
import { ICard } from './interfaces';
import Image from 'next/image';
import PuppyImage from 'public/puppy.jpg';
import Link from 'next/link';
import Styles from './card.module.scss';

function BaseCard({ header, paragraph, testId }: Omit<ICard, 'link'>) {
  return (
    <div className="p-10" data-testid={testId || undefined}>
      <div className={Styles.card}>
        <Image className="w-full" src={PuppyImage} alt="Puppy" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{header}</div>
          <p className="text-gray-700 dark:text-slate-200 text-base">
            {paragraph}
          </p>
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

function Card({ link, header, paragraph, testId }: ICard) {
  if (link !== undefined) {
    return (
      <Link href={link}>
        <BaseCard header={header} paragraph={paragraph} testId={testId} />
      </Link>
    );
  } else {
    return <BaseCard header={header} paragraph={paragraph} testId={testId} />;
  }
}

export default Card;
