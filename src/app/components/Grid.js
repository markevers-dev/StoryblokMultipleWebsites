import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function Grid({ blok }) {
  return (
    <div className={`grid grid-cols-3 gap-2 mx-2`} {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
