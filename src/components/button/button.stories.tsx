import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { buttonProps, redirectButtonProps } from './mock-data';
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
      options: [undefined, ...Object.values(buttonColorSchemes)],
    },
    size: {
      control: 'radio',
      options: [...Object.values(buttonSizes)],
    },
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'full',
  },
  decorators: [
    (Story) => (
      <div className="py-10">
        <div className="container">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...buttonProps },
};
export const Redirect: StoryObj<typeof Component.Redirect> = {
  args: { ...redirectButtonProps },
};
