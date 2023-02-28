import React from 'react';
import { CardImageDimensions, ICard } from './interface';
import Link from 'next/link';
import { CustomImage } from '@components/custom-image';
import CardWrapper from '../wrapper';
import { CardBorderRadiusEnum, CardShadowEnum } from '../wrapper/interface';
import clsx from 'clsx';

const tagColors = ['bg-warning', 'bg-danger-light', 'bg-secondary'] as const;
type ITagColor = (typeof tagColors)[number];

interface ITag {
  label: string;
  color: ITagColor;
}

function Tag({ label, color }: ITag) {
  const tagClasses = clsx(
    'inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-black rounded-full',
    { [color]: color }
  );
  return <span className={tagClasses}>{label}</span>;
}

function BaseCard({ image, description, name, tags }: Omit<ICard, 'link'>) {
  return (
    <CardWrapper
      cardBorderRadius={CardBorderRadiusEnum.RadiusOne}
      cardShadow={CardShadowEnum.ShadowOne}
    >
      <div className={'h-full bg-secondary-light'}>
        <div>
          <CustomImage
            alt={image.alt}
            height={CardImageDimensions.height}
            width={CardImageDimensions.width}
            src={image.src}
            lqip={image.lqip}
          />
        </div>
        <div className="p-5 md:p-6 bg-[#ddd] space-y-5">
          <h3 className="text-xl font-bold text-black dark:text-black">
            {name}
          </h3>
          <p className="text-black dark:text-black line-clamp-3 text-[18px]">
            {description}
          </p>
          {tags.length > 0 && (
            <div>
              <div className="inline-flex items-center flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Tag
                    label={tag}
                    key={index}
                    color={tagColors[index % tagColors.length]}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}

function Card({ link, ...restProps }: ICard) {
  if (link !== undefined) {
    return (
      <Link href={link} className="inline-block">
        <BaseCard {...restProps} />
      </Link>
    );
  } else {
    return <BaseCard {...restProps} />;
  }
}

export default Card;
