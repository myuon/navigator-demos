import type { Meta, StoryObj } from "@storybook/react";

import { MediaDecodingCapabilities } from "./MediaCapabilities";

const meta = {
  title: "Stories/MediaCapabilities",
  component: MediaDecodingCapabilities,
} satisfies Meta<typeof MediaDecodingCapabilities>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Decoding: Story = {
  args: {
    type: "file",
    video: {
      contentType: "video/mp4; codecs=avc1.42E01E",
      width: 1920,
      height: 1080,
      bitrate: 1000000,
      framerate: 30,
    },
    audio: {
      contentType: "audio/mp3",
      channels: "2",
      bitrate: 128000,
      samplerate: 44100,
    },
  },
};
