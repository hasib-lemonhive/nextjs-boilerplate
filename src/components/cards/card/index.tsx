import React from 'react';
import { CardImageDimensions, ICard } from './interface';
import Link from 'next/link';
import Styles from './card.module.scss';
import { PortableText } from '@portabletext/react';
import { CustomImage } from '@components/custom-image';
import CardWrapper from '../wrapper';
import { CardBorderRadiusEnum, CardShadowEnum } from '../wrapper/interface';

function BaseCard({ item }: Omit<ICard, 'link'>) {
  return (
    <CardWrapper
      cardBorderRadius={CardBorderRadiusEnum.RadiusOne}
      cardShadow={CardShadowEnum.ShadowOne}
    >
      <div className={Styles.card + ' ' + 'h-full'}>
        <CustomImage
          alt={item.image.alt}
          height={CardImageDimensions.height}
          width={CardImageDimensions.width}
          src={item.image.src}
          lqip={item.image.lqip}
        />
        <div className="px-6 py-4">
          <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
          <div className="space-y-2 text-base line-clamp-3">
            <PortableText value={item.description} />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black rounded-full bg-warning">
            #tag1
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black rounded-full bg-danger-light">
            #tag2
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-black rounded-full bg-secondary">
            #tag3
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

function Card({ link, item }: ICard) {
  if (link !== undefined) {
    return (
      <Link href={link} className="inline-block">
        <BaseCard item={item} />
      </Link>
    );
  } else {
    return <BaseCard item={item} />;
  }
}

export default Card;
