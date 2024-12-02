import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import initStoryblok from "./initStoryblock";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  // Instead of a port one would normally use next/headers and headers.get to retrieve the host and use that for the folder name, but on localhost that does not work
  const port = process.env.PORT;
  const envKey = `PORT_${port}`;
  const folder = process.env[envKey];

  if (!folder)
    throw new Error(`The website with domain ${port} cannot be accessed`);

  const { data } = await fetchData(folder);
  if (!data)
    throw new Error(
      "An error has occured while accessing the data from Storyblok"
    );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoryblokStory story={data.story} />
    </Suspense>
  );
}

async function fetchData(folder, language = "en") {
  initStoryblok();
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(
    `cdn/stories/${folder}`,
    { version: "draft", language },
    { cache: "no-store" }
  );
}
