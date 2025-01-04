import type { Meta, StoryObj } from '@storybook/react';

import { ContactsManager } from './Contacts';

const meta = {
  component: ContactsManager,
} satisfies Meta<typeof ContactsManager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};