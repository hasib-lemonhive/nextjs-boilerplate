import Component from '.';
import { mockdata } from './mock-data';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...mockdata },
};
