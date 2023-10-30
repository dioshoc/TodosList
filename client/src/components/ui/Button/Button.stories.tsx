import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import '@/index.css';

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      defaultValue: 'Button',
      description: 'Текст кнопки',
      type: 'string',
    },
    disabled: {
      description: 'Управление состоянием кнопки',
      type: 'boolean',
    },
  },
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    disabled: false,
  },
};
