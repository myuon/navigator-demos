import type { Meta, StoryObj } from '@storybook/react';

import { GetInstalledRelatedApps } from './GetInstalledRelatedApps';

const meta = {
  component: GetInstalledRelatedApps,
} satisfies Meta<typeof GetInstalledRelatedApps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};