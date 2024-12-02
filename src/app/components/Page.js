import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function Page({ blok }) {
  return (
    <main {...storyblokEditable(blok)} className="text-center mt-4">
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
