import type { Meta, StoryObj } from '@storybook/react';

import { PdfViewerEnabled } from './PdfViewerEnabled';

const meta = {
  component: PdfViewerEnabled,
} satisfies Meta<typeof PdfViewerEnabled>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};