import { storyblokInit, apiPlugin } from "@storyblok/react";

export default function initStoryblok(options = {}) {
  storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    ...options,
  });
}
