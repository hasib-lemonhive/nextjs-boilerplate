import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { mockdata } from './mock-data';
import { IExampleHero } from './interface';

interface IExampleHeroStory extends IExampleHero {
  TitleRegularPart: string;
  TitleEmphasizedPart: string;
}

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: false,
    },
    testId: {
      control: false,
    },
  },
};

export default meta;

export const Primary: StoryObj<IExampleHeroStory> = {
  render: ({ TitleRegularPart, TitleEmphasizedPart, title, description }) => {
    title = {
      emphasizedPart: TitleEmphasizedPart,
      regularPart: TitleRegularPart,
    };
    return <Component title={title} description={description} />;
  },
  args: {
    TitleRegularPart: mockdata.title.regularPart,
    TitleEmphasizedPart: mockdata.title.emphasizedPart,
    ...mockdata,
  },
};
