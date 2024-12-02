"use client";

import initStoryblok from "../initStoryblock";

import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

initStoryblok({ components });

export default function StoryblokProvider({ children }) {
  return children;
}
