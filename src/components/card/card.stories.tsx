import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { mockDog } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { dog: mockDog },
};
