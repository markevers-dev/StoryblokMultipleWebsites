import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }) {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      {blok.name}
    </div>
  );
}
