import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { mockDog } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="py-10">
        <div className="container">
          <div className="max-w-[360px]">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { item: mockDog },
};
