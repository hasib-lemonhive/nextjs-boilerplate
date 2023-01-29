import Component from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { header: 'Header One', paragraph: 'Paragraph', link: '#' },
};
