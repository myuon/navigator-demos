import type { Meta, StoryObj } from '@storybook/react';

import { Webdriver } from './Webdriver';

const meta = {
  component: Webdriver,
} satisfies Meta<typeof Webdriver>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};