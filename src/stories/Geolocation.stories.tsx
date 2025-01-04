import type { Meta, StoryObj } from '@storybook/react';

import { Geolocation } from './Geolocation';

const meta = {
  component: Geolocation,
} satisfies Meta<typeof Geolocation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};