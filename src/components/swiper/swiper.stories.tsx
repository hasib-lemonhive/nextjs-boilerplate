import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { swiperPreviewimages, swiperCommonOptions } from './mock-data';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  render: () => (
    <Component {...swiperCommonOptions} haveOffset>
      {swiperPreviewimages.map((swiperPreviewimage, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`${swiperPreviewimage}`}
            alt={`image-${index}`}
            width={960}
            height={720}
          />
        </SwiperSlide>
      ))}
    </Component>
  ),
};
