import Component from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: {},
};
