import type { Meta, StoryObj } from '@storybook/react';

import { RequestMediaKeySystemAccess } from './RequestMediaKeySystemAccess';

const meta = {
  component: RequestMediaKeySystemAccess,
} satisfies Meta<typeof RequestMediaKeySystemAccess>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};