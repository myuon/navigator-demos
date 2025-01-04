import type { Meta, StoryObj } from '@storybook/react';

import { RequestMidiAccess } from './RequestMidiAccess';

const meta = {
  component: RequestMidiAccess,
} satisfies Meta<typeof RequestMidiAccess>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};