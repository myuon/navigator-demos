import type { Meta, StoryObj } from '@storybook/react';

import { RegisterProtocolHandler } from './RegisterProtocolHandler';

const meta = {
  component: RegisterProtocolHandler,
} satisfies Meta<typeof RegisterProtocolHandler>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};