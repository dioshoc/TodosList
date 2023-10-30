import type { Meta, StoryObj } from '@storybook/react';

import '@/index.css';

import { ETaskType } from '@/types/task';
import Task from '@ui/Task/Task';

const meta: Meta<typeof Task> = {
  argTypes: {
    type: {
      control: {
        labels: ['default', 'check', 'error'],
        type: 'radio',
      },
      mapping: [ETaskType.default, ETaskType.check, ETaskType.error],
    },
  },
  component: Task,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    title: 'Заголовок задачи',
    description: 'Описание задачи',
  },
};
