import type { Meta, StoryObj } from "@storybook/react";

import { MediaEncodingCapabilities } from "./MediaCapabilities";

const meta = {
  title: "Stories/MediaCapabilities",
  component: MediaEncodingCapabilities,
} satisfies Meta<typeof MediaEncodingCapabilities>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Encoding: Story = {
  args: {
    type: "webrtc",
    video: {
      contentType: "video/webm; codecs=vp8",
      width: 1920,
      height: 1080,
      bitrate: 10000000,
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
