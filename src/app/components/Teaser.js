import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }) {
  return (
    <h2 className="text-2xl mb-10 font-bold" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
}
