import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { buttonProps } from './mock-data';
import { buttonColorSchemes, buttonSizes } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    colorScheme: {
      control: 'select',
      options: [...Object.values(buttonColorSchemes)],
    },
    hoverColorScheme: {
      control: 'select',
      options: [...Object.values(buttonColorSchemes)],
    },
    size: {
      control: 'inline-radio',
      options: [...Object.values(buttonSizes)],
    },
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...buttonProps },
};
