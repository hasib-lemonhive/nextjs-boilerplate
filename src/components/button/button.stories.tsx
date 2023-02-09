import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { buttonProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...buttonProps },
};
