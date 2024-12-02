import { storyblokInit, apiPlugin } from "@storyblok/react";

export default function initStoryblok(options = {}) {
  storyblokInit({
    accessToken: "a9j2QNlmQXdbF6JuO4p5Vgtt",
    use: [apiPlugin],
    ...options,
  });
}
