import type { Meta, StoryObj } from '@storybook/react';

import { Language } from './Language';

const meta = {
  component: Language,
} satisfies Meta<typeof Language>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};